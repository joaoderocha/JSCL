'use strict';

const { test } = require('tap');
const { msg } = require('../src/folder2');

test('heloooooo', (t) => {
  t.same(msg, 'olaaa');
});
