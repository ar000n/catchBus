var http = require('http');
var routers = require('./router.js');

var server = http.createServer(routers);
server.listen(3000,function(){console.log("listening at port===>"+3000)});
server.on('error',function(e){
	console.log('Can not Start the Server due to:--',e.message);
});
 