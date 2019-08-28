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
        database    : "simple_web_app",
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

    serverConfig.mongodb.url            =   process.env.dbUrl || "mongodb://127.0.0.1:27017/demo";
    serverConfig.mongodb.database       =   "simple_web_app";
    serverConfig.mongodb.user           =   "bram";
    serverConfig.mongodb.password       =   "bram123";
    serverConfig.port                   =   process.env.serverPort || "4001";
}

/** exporting server configuration **/
module.exports = serverConfig;
