'use strict';

const server = require('./src/server.js');
const { db } = require('./src/auth/models');
const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    server.start(PORT)
  }).catch(e => {
    console.error('Could not start server', e.message);
  });