'use strict';

const { onData, onError } = require('../socket-handlers');

const debug = require('debug')('server:handler:connection');

exports.connectionHandler = function connectionHandler(socket) {
  console.log({ socket });

  const remoteAddress = `${socket.remoteAddress}:${socket.remotePort}`;

  debug(`new connection on ${remoteAddress}`);

  socket.on('data', onData);
  socket.on('error', onError);
};
