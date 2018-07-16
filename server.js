var requestHandlerModule = require('./modules/request-handler');
var http = require('http');
var port = 8000;
http.createServer(requestHandlerModule.handle_requests).listen(port, '127.0.0.1'); 
//pass handle_requests 