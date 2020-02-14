// load the http module

var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello to mmy Jenkins Test! \n");
});

// thiis will listen on localhost:9000
server.listen(9900);
console.log("Server listening on port 9900 :  http://127.0.0.1:9900/");