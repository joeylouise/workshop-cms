var http = require('http');
var fs = require('fs');

var message1 = 'I am so happy to be part of the Node Girls workshop!';
var message2 = 'You are on the girls page!';

function handler (request, response) {

  var endpoint = request.url;
  console.log(endpoint);

  var method = request.method;
  console.log(method);

  if (endpoint === "/node") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(message1); //response body
    response.end(); //finish response
  }

  else if (endpoint === "/girls") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(message2); //response body
    response.end(); //finish response
  }

}

var server = http.createServer(handler        );
server.listen(3000, function(){
  console.log('Server is listening on port 3000.  Ready to accept requests!');

})
