var fs = require('fs');
var routeFile ='./routeData.txt';
var hubData = require('./busHubs.js');
var ld = require('lodash');

var routeData =fs.readFileSync(routeFile,'utf-8');
var route = {};

routeData = routeData.split('\n');
var busData = {};
for(var i =0;i<routeData.length;i++){
	var key = routeData[i].split(':');
	busData[key.shift()] = key.shift().split(',');
}

var arrayOfStops = [];
var keys = Object.keys(busData);
for(var i=0;i<keys.length;i++){
	arrayOfStops.push(busData[keys[i]]);
}

for(i in arrayOfStops){
	for (index in arrayOfStops[i]){
		if(arrayOfStops[index+1])
			console.log(arrayOfStops[i][index]);
	}
}