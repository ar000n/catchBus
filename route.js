var fs = require('fs');
var routeFile ='./routeData.txt';
var hubData = require('./busHubs.js');

var routeData =fs.readFileSync(routeFile,'utf-8');
var route = {};

routeData = routeData.split('\n');
var busData = {};
for(var i =0;i<routeData.length;i++){
	var key = routeData[i].split(':');
	busData[key.shift()] = key.shift().split(',');
}
route.directBus = function(from,to){
	var buses = [];
	for(var bus in busData){
		var fromIndex = busData[bus].indexOf(from);
		var toIndex = busData[bus].indexOf(to);
		if(fromIndex>=0 && toIndex >fromIndex)
			buses.push(bus);
	}
	return buses;
};

route.indirectBuses = function(from,to){
	var hubs = Object.keys(hubData);
	var allPaths = [];
	for(var i=0;i<hubs.length;i++){
		var path = {};
		var busesFrom = route.directBus(from,hubs[i]);
		var busesTo = route.directBus(hubs[i],to);
		if(busesFrom.length && busesTo.length){
			path.catch_any_of = busesFrom;
			path.getdown_at = hubs[i];
			path.then_catch_any_of = busesTo;
			allPaths.push(path);
		}
	}
		
	return allPaths;
}
module.exports = route;








