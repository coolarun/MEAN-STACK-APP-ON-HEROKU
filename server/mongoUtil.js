'use strict'

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
    connect() {
        client.connect('put your database link here', (err,db) => {
             if(err){
                 console.log('Error occured while connecting to the mongodb server');
                 process.exit(1);
             }
                _db = db;
                console.log('Connected to Mongo');
                
                
        });
    },
    sports() {
        return _db.collection('sports');
    }

}
