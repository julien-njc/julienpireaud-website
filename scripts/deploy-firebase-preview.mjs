import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync, execFileSync } from 'node:child_process';

const run = (command, args, env = process.env) => {
  const executable = process.platform === 'win32' && command === 'npx' ? 'npx.cmd' : command;
  const result = spawnSync(executable, args, {
    stdio: 'inherit',
    env
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

const ensureServiceAccountFile = () => {
  const value = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();

  if (!value) {
    return undefined;
  }

  if (existsSync(value)) {
    return resolve(value);
  }

  const outputDir = resolve('.firebase');
  const credentialsPath = resolve(outputDir, 'service-account.generated.json');
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(credentialsPath, `${value}\n`);
  return credentialsPath;
};

const sanitizeChannelId = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);

const detectGitBranch = () => {
  try {
    return execFileSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
      encoding: 'utf8'
    }).trim();
  } catch {
    return '';
  }
};

const resolvePreviewChannel = () => {
  const fromEnv = process.env.FIREBASE_PREVIEW_CHANNEL?.trim();

  if (fromEnv) {
    const sanitized = sanitizeChannelId(fromEnv);
    if (!sanitized || sanitized === 'live') {
      throw new Error('FIREBASE_PREVIEW_CHANNEL must resolve to a non-live preview channel id.');
    }

    return sanitized;
  }

  const branch = detectGitBranch();
  const branchChannel = sanitizeChannelId(branch);

  if (branchChannel && branchChannel !== 'head' && branchChannel !== 'live') {
    return branchChannel;
  }

  return 'local-preview';
};

try {
  const credentialsPath = ensureServiceAccountFile();
  const env = {
    ...process.env
  };

  if (credentialsPath) {
    env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;
  }

  run('npm', ['run', 'build'], env);

  const projectId = process.env.FIREBASE_PROJECT_ID?.trim();
  const channelId = resolvePreviewChannel();
  const expires = process.env.FIREBASE_PREVIEW_EXPIRES?.trim() || '7d';

  if (!projectId) {
    throw new Error('Missing FIREBASE_PROJECT_ID.');
  }

  console.log(`Deploying Firebase Hosting preview channel "${channelId}" in project "${projectId}"`);

  run(
    'npx',
    [
      'firebase-tools',
      'hosting:channel:deploy',
      channelId,
      '--expires',
      expires,
      '--config',
      'firebase.json',
      '--project',
      projectId
    ],
    env
  );

  if (credentialsPath) {
    rmSync(credentialsPath, { force: true });
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
