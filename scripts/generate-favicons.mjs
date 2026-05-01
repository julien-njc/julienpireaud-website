import { accessSync, constants } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const staticDir = path.join(repoRoot, 'static');

const svgPath = path.join(staticDir, 'favicon.svg');
const pngPath = path.join(staticDir, 'favicon.png');
const icoPath = path.join(staticDir, 'favicon.ico');

const assertReadable = (filePath) => {
  try {
    accessSync(filePath, constants.R_OK);
  } catch {
    throw new Error(`Missing required file: ${path.relative(repoRoot, filePath)}`);
  }
};

const run = (command, args) => {
  execFileSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit'
  });
};

assertReadable(svgPath);

run('rsvg-convert', ['-w', '512', '-h', '512', '-o', pngPath, svgPath]);
run('magick', [
  pngPath,
  '-background',
  'none',
  '-define',
  'icon:auto-resize=16,24,32,48,64,128,256',
  icoPath
]);

console.log(`Generated ${path.relative(repoRoot, pngPath)} and ${path.relative(repoRoot, icoPath)}`);
