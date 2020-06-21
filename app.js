var express = require("express");
app = express();

app.get('/', function(req, res){
    res.send('hello world!!\n');
});

app.get('/mars', function(req, res){
    res.send('hello mars!\n');
});