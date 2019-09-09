/**
 * Created by Radhey Shyam on 15/02/18.
 */

"use strict";

/******************************************
 ****** Default Server configuration ******
 ******************************************/
let serverConfig = {
    mongodb: {
        host        : "172.18.0.3",
        port        : 27017,
        name        : "mongodb",
        connector   : "mongodb",
        url         : process.env.dbUrl || "mongodb://127.0.0.1:27017/demo",
        database    : "ghibli_api",
        user        : "",
        password    : "",
    },
    host    : "172.18.0.3",
    type    : "http://",
    port    : process.env.serverPort || 27017
};


/***********************************
 ** Maintain server Configuration **
 **** according to env variable ****
 ***********************************/
if(process.env.NODE_ENV === "development"){
    
    serverConfig.mongodb.user           =   "";
    serverConfig.mongodb.password       =   "";
}

else if( process.env.NODE_ENV === "production"){

    serverConfig.mongodb.url            =   process.env.dbUrl;
    serverConfig.mongodb.database       =   "ghibli_api";
    serverConfig.mongodb.user           =   "ghibli_mongo";
    serverConfig.mongodb.password       =   "ghibli_mongo_password";
    serverConfig.port                   =   process.env.serverPort;
}

/** exporting server configuration **/
module.exports = serverConfig;
