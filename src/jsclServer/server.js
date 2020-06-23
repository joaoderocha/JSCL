'use strict';

const debug = require('debug')('server');
const net = require('net');
const { connectionHandler, errorHandler } = require('./server-handlers');

exports.startServer = async function startServer(port) {
  const server = net.createServer();

  console.log(port);

  server.on('connection', connectionHandler);
  server.on('error', errorHandler);

  await awaitServerReady(server, port);

  debug(`Server is ${server.listening ? `listening on ${port}` : 'not listening'}`);

  return server;
};

function awaitServerReady(server, port) {
  return new Promise((resolve) => {
    server.listen({ port }, () => {
      resolve(server);
    });
  });
}
