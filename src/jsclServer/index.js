'use strict';

const { startServer } = require('./server');
const config = require('../config');

module.exports = {
  startServer: start,
};

function start(port) {
  return startServer(port || config.port);
}
