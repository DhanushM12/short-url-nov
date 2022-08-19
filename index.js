const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const ShortUrl = require('./models/shorlUrl');

app.set('view engine', 'ejs');


app.listen(port, function (err){
    if(err){
        console.log(`Error in running the server: ${err}`)
    }
    console.log(`Server is up and running port : ${port}`)
})