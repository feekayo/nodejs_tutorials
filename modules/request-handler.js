module.exports = {
	handle_requests: function (req, res) { //req=>request, res=>response
    	res.writeHead(200, { //only text content type would be returned
    		   'Content-Type' : 'text/plain' 
    	});

    	res.end('Hello World'); //send hello world response to the client 
    	console.log(req.method+' method requested');
	}
}