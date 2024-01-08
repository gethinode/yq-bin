import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import BinWrapper from '@xhmikosr/bin-wrapper';
import { packageConfig } from 'pkg-conf';

const pkg = new URL('../package.json', import.meta.url);
const { yqVersion } = JSON.parse(await fs.readFile(pkg, 'utf8'));
const destDir = path.join(fileURLToPath(new URL('../vendor/', import.meta.url)));

function binName() {
  const platform = process.platform === 'win32' ? 'windows' : process.platform;
  let arch = String(process.arch);
  const ext = process.platform === 'win32' ? '.exe' : '';

  switch (arch) {
    case 'x64': {
      arch = 'amd64';
      break;
    }

    case 'ia32': {
      arch = '386';
      break;
    }

    default:
  }

  // TODO: underlying library does not recognize arm64 correctly, map to amd64 instead
  if ((platform === 'darwin') && (arch === 'arm64')) {
    arch = 'amd64';
  }

  return `yq_${platform}_${arch}${ext}`;
}

function normalBin(baseUrl) {
  return new BinWrapper()
    .src(`${baseUrl}yq_darwin_amd64.tar.gz`, 'darwin', 'x64')
    .src(`${baseUrl}yq_darwin_arm64.tar.gz`, 'darwin', 'arm64')
    .src(`${baseUrl}yq_freebsd_386.tar.gz`, 'freebsd', 'ia32')
    .src(`${baseUrl}yq_freebsd_amd64.tar.gz`, 'freebsd', 'x64')
    .src(`${baseUrl}yq_freebsd_arm.tar.gz`, 'freebsd', 'arm')
    .src(`${baseUrl}yq_linux_386.tar.gz`, 'linux', 'ia32')
    .src(`${baseUrl}yq_linux_amd64.tar.gz`, 'linux', 'x64')
    .src(`${baseUrl}yq_linux_arm.tar.gz`, 'linux', 'arm')
    .src(`${baseUrl}yq_linux_arm64.tar.gz`, 'linux', 'arm64')
    .src(`${baseUrl}yq_linux_mips.tar.gz`, 'linux', 'mips')
    // .src(`${baseUrl}yq_linux_mips64.tar.gz`, 'linux', 'mips64')
    // .src(`${baseUrl}yq_linux_mips64le.tar.gz`, 'linux', 'mips64le')
    // .src(`${baseUrl}yq_linux_mipsle.tar.gz`, 'linux', 'mipsle')
    .src(`${baseUrl}yq_linux_ppc64.tar.gz`, 'linux', 'ppc64')
    // .src(`${baseUrl}yq_linux_ppc64le.tar.gz`, 'linux', 'ppc64le')
    .src(`${baseUrl}yq_linux_s390x.tar.gz`, 'linux', 's390x')
    .src(`${baseUrl}yq_openbsd_386.tar.gz`, 'openbsd', 'ia32')
    .src(`${baseUrl}yq_openbsd_amd64.tar.gz`, 'openbsd', 'x64')
    .src(`${baseUrl}yq_windows_386.zip`, 'win32', 'ia32')
    .src(`${baseUrl}yq_windows_amd64.zip`, 'win32', 'x64')
    .dest(destDir)
    .use(binName());
}

async function main(cwd) {
  const config = await packageConfig('yq-bin', { cwd });
  const downloadRepo = [
    process.env.YQ_BIN_DOWNLOAD_REPO,
    process.env.npm_config_yq_bin_download_repo,
    config.downloadRepo
  ].find(Boolean) || 'https://github.com';
  const baseUrl = `${downloadRepo}/mikefarah/yq/releases/download/v${yqVersion}/`;

  return normalBin(baseUrl);
}

export default main;
