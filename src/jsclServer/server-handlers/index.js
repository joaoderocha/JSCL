'use strict';

const { connectionHandler } = require('./server-connection-handler');
const { errorHandler } = require('./server-error-handler');

module.exports = {
  connectionHandler,
  errorHandler,
};
