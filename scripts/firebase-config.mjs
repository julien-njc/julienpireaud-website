import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const templatePath = resolve('firebase.json');
const outputDir = resolve('.firebase');
const outputPath = resolve(outputDir, 'firebase.generated.json');

export const writeFirebaseConfig = () => {
  const projectId = process.env.FIREBASE_PROJECT_ID?.trim();
  const hostingSite = process.env.FIREBASE_HOSTING_SITE?.trim() || projectId;

  if (!projectId) {
    throw new Error('Missing FIREBASE_PROJECT_ID.');
  }

  const template = JSON.parse(readFileSync(templatePath, 'utf8'));
  const config = {
    ...template,
    hosting: {
      ...template.hosting,
      site: hostingSite
    }
  };

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `${JSON.stringify(config, null, 2)}\n`);

  return {
    configPath: outputPath,
    projectId,
    hostingSite
  };
};

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    const result = writeFirebaseConfig();
    console.log(`Wrote Firebase Hosting config to ${result.configPath}`);
    console.log(`Project: ${result.projectId}`);
    console.log(`Hosting site: ${result.hostingSite}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
