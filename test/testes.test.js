'use strict';

const { test } = require('tap');
const { msg, main } = require('../src/folder2');

test('heloooooo', (t) => {
  t.same(msg, 'olaaa');
  main();

  t.end();
});
