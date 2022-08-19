const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/urlnovdb')

const db = mongoose.connection;

db.on('error', function(){
    console.log('error connecting to mongodb')
})

db.once('open', function(){
    console.log('Successfully connected to db')
})

module.exports = db;