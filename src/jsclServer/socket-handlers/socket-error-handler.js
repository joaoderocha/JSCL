'use strict';

const debug = require('debug')('server:socket:handler:error');

module.exports = {
  errorHandler,
};

function errorHandler(error) {
  debug(error.message);
}
