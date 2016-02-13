var http = require('http');
var routers = require('./router.js');
var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP;
var PORT = process.env.OPENSHIFT_NODEJS_PORT ||  3000;
var server = http.createServer(routers);
// server.listen(3000,function(){console.log("listening at port===>"+3000)});
// server.on('error',function(e){
	// console.log('Can not Start the Server due to:--',e.message);
// });
// var server = http.createServer();
server.listen(PORT,IP_ADDRESS);
 
