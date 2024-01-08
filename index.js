import process from 'node:process';
import yqBin from './lib/index.js';

const bin = await yqBin(process.cwd());
const yqPath = bin.path();

export default yqPath;
