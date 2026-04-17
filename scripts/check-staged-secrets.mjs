import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const hasGitRepo = existsSync('.git');

if (!hasGitRepo) {
  process.exit(0);
}

const ignoreList = existsSync('.husky/.ignore')
  ? readFileSync('.husky/.ignore', 'utf8')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
  : [];

const detectors = [
  {
    label: 'Firebase API key',
    regex: /AIza[0-9A-Za-z\-_]{35}/
  },
  {
    label: 'Google service account private key',
    regex: /-----BEGIN PRIVATE KEY-----/
  },
  {
    label: 'AWS access key ID',
    regex: /AKIA[0-9A-Z]{16}/
  },
  {
    label: 'Generic credential assignment',
    regex:
      /\b(api[_-]?key|secret|password|token|client[_-]?secret|access[_-]?key|private[_-]?key)\b\s*[:=]\s*["'`][^"'`\s]{8,}["'`]/i
  }
];

const allowedContextMatchers = [
  'process.env',
  'import.meta.env',
  '$env/',
  '$env.',
  'PUBLIC_',
  'FIREBASE_',
  'GOOGLE_APPLICATION_CREDENTIALS'
];

const diff = execFileSync('git', ['diff', '--cached', '--no-color', '--unified=0'], {
  encoding: 'utf8'
});

const stagedAdditions = [];
let currentFile = '';

for (const line of diff.split('\n')) {
  if (line.startsWith('+++ b/')) {
    currentFile = line.slice('+++ b/'.length);
    continue;
  }

  if (line.startsWith('+') && !line.startsWith('+++')) {
    stagedAdditions.push({
      file: currentFile,
      line
    });
  }
}

const findings = [];

for (const addition of stagedAdditions) {
  if (ignoreList.some((term) => addition.file.includes(term))) {
    continue;
  }

  if (ignoreList.some((term) => addition.line.includes(term))) {
    continue;
  }

  if (allowedContextMatchers.some((term) => addition.line.includes(term))) {
    continue;
  }

  for (const detector of detectors) {
    if (detector.regex.test(addition.line)) {
      findings.push({
        detector: detector.label,
        file: addition.file,
        line: addition.line
      });
      break;
    }
  }
}

if (findings.length === 0) {
  console.log('No obvious secrets detected in staged changes.');
  process.exit(0);
}

console.error('Potential sensitive data detected in staged changes:');

for (const finding of findings) {
  console.error(`- ${finding.detector} in ${finding.file}: ${finding.line}`);
}

console.error('Use environment variables or server-side secret storage instead.');
console.error('If this is a false positive, add a narrow ignore term to .husky/.ignore.');
process.exit(1);
