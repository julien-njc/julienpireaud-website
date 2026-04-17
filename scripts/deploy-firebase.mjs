import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { writeFirebaseConfig } from './firebase-config.mjs';

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
  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();

  if (!json) {
    return undefined;
  }

  const outputDir = resolve('.firebase');
  const credentialsPath = resolve(outputDir, 'service-account.generated.json');
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(credentialsPath, `${json}\n`);
  return credentialsPath;
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

  const { configPath, projectId, hostingSite } = writeFirebaseConfig();

  console.log(`Deploying Firebase Hosting site "${hostingSite}" in project "${projectId}"`);

  run('npx', ['firebase-tools', 'deploy', '--config', configPath, '--project', projectId, '--only', 'hosting'], env);

  if (credentialsPath) {
    rmSync(credentialsPath, { force: true });
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
