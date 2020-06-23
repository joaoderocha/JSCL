'use strict';

const { dataHandler } = require('./socket-data-handler');
const { errorHandler } = require('./socket-error-handler');

module.exports = {
  dataHandler,
  errorHandler,
};
