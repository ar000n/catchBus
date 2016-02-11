var bodyParser= require('body-parser');
var express = require('express');
var q = require('querystring');
var app = express();
var route = require('./route.js');

app.use(express.static('./html/'));
app.use(bodyParser());

app.get('/',function(req,res){
	res.redirect('index.html');
});

app.post('/findRoute',function(req,res){
	var from = req.body.from;
	var to = req.body.to;
	var result = (route.directBus(from, to).length ==0) ? 
	route.indirectBuses(from, to) : route.directBus(from, to);
	res.json(result);
});

module.exports = app;












