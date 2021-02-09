const http = require('http');
var express = require('express');
var compression = require('compression');
var path = require("path");
var app = express();
var fs = require('fs');
app.use(express.static('public'));
app.use(express.static('files'));
app.use(compression());

var privateKey = fs.readFileSync( 'key.key' );
var certificate = fs.readFileSync( 'certificate.pem' );

http.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(process.env.PORT || 80,function(){
    console.log("webserver listening!");
});
