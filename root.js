var fs = require('fs');
var file ='./rootData.txt';
var rootData =fs.readFileSync(file,'utf-8');

rootData = rootData.split('\n');
var busData = {};
for(var i =0;i<rootData.length;i++){
	var key = rootData[i].split(':');
	busData[key.shift()] = key.shift().split(',');
}

var directBus = function(from,to){
	var buses = [];
	for(var bus in busData){
		if(busData[bus].indexOf(from)>=0 && busData[bus].indexOf(to)>=0)
			buses.push(bus);
	}
	return buses;
};
console.log(directBus('JNR 5TH BLK','LALBHAG MAIN GATE'));
