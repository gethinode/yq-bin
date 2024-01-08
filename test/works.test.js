import binCheck from '@xhmikosr/bin-check';
import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import yqPath from '../index.js';

const testSuite = suite('works');

testSuite('should return path to binary and work', async() => {
  const works = await binCheck(yqPath, ['-V']);
  assert.is(works, true);
});

testSuite.run();
