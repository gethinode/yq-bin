import { rm } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import yqBin from './index.js';

function getProjectRoot() {
  // `projectRoot` on postinstall could be INIT_CWD introduced in npm >= 5.4
  // see: https://github.com/npm/npm/issues/16990
  const initCwd = process.env.INIT_CWD;
  if (initCwd) {
    return initCwd;
  }

  // Fallback of getting INIT_CWD
  const cwd = process.cwd();
  const paths = cwd.split(path.sep);
  // If `process.cwd` ends with 'node_modules/*' then get the dependent root directory,
  // otherwise return the `cwd` (ordinary it will be the postinstall process of yq-bin itself).
  if (paths.length > 1 && paths.at(-2) === 'node_modules') {
    return path.resolve('../../', cwd);
  }

  return cwd;
}

async function main() {
  const projectRoot = getProjectRoot();
  const vendorDir = path.join(projectRoot, './vendor');

  await rm(vendorDir, { force: true, recursive: true });

  const bin = await yqBin(projectRoot);

  bin.run(['-V']).then(() => {
    console.log('yq binary successfully installed!');
  })
    .catch(error => {
      console.error('yq binary installation failed!');
      throw new Error(error);
    });
}

main();
