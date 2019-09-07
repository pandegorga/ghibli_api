/**
 * Created by Bram Pande Gorga Tua Silitonga Shyam on 14/07/19.
 */
"use strict";

/**************************************************
 ***** Main Program ****
 **************************************************/


const app             = require('./app.js');
const db_config       = require('./config'); 
const mongoose        = require('mongoose');
const conn           =  mongoose.createConnection(db_config.dbConfig.mongodb.url);

mongoose.connect(db_config.dbConfig.mongodb.url, { useMongoClient: true });
conn.Promise = global.Promise;
conn.on('connected', () => {
    console.log(`Mongoose connection open on ${db_config.dbConfig.mongodb.url}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });  
const server = app.listen(8080, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
