'use strict';

const debug = require('debug')('server:handler:error');

exports.errorHandler = function errorHandler(error) {
  debug(error.message);
};
