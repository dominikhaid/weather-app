const server = require('./src/bin/main').server;
const fs = require('fs');
const serverOptions = require('./src/bin/main').serverOptions;
let privateKey, certificate, credentials, httpsServer, http, https, httpServer;

/**
 *  STARTUP SERVER
 */

if (serverOptions.http) {
  http = require('http');
  httpServer = http.createServer(server);
}

if (serverOptions.https) {
  https = require('https');
  privateKey = fs.readFileSync('certificates/key.pem', 'utf8');
  certificate = fs.readFileSync('certificates/cert.pem', 'utf8');
  credentials = {key: privateKey, cert: certificate};
  httpsServer = https.createServer(credentials, server);
}

const startNext = require('./src/bin/next').startServer;
startNext(server, serverOptions, {
  http: http,
  httpServer: httpServer,
  https: https,
  httpsServer: httpsServer,
});
