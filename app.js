var express = require('express');
var compression = require('compression');
var path = require("path");
var app = express();
app.use(express.static('public'));
app.use(express.static('files'));
app.use(compression());

app.listen(8000, function(){
    console.log("webserver listening!");
});