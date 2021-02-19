const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
var upload = multer({dest: './uploads/'});
const server = express();

let serverOptions;
try {
  serverOptions = require('../../config/server-conf.js');
} catch (error) {
  throw 'Server config not found in ./config';
}

/**
 * LOAD ENV VARS
 */
const startDotenv = require('./env').startDotenv;
startDotenv();

/**
 * MIDDELWARE HTTP REQUESTS
 */
const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(express.static(`../${process.env.PUBLIC_FOLDER}`));

/**
 *  SERVER LOGS
 */
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../../log/access.log'),
  {
    flags: 'a',
  },
);

const startMorgan = require('./morgan').startMorgan;
startMorgan(server, accessLogStream);

/**
 *  SERVER OPTIONS
 */

if (serverOptions.helment) {
  const startHelmet = require('./helmet').startHelmet;
  startHelmet(server);
}

if (serverOptions.cors) {
  const startCors = require('./cors').startCors;
  startCors(server);
}

module.exports.server = server;
module.exports.serverOptions = serverOptions;
