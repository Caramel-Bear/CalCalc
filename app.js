var express = require("express");
var app = express();
var vue = require('Vue');

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("index.ejs");
});

app.listen(8080);
console.log('8080 is the magical number!!');