var http = require('http');
var fs = require('fs');

var message1 = 'I am so happy to be part of the Node Girls workshop!';
var message2 = 'You are on the girls page!';

function handler (request, response) {

  var endpoint = request.url;
  var method = request.method;

  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});

    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  }
}

var server = http.createServer(handler);
server.listen(3000, function(){
  console.log('Server is listening on port 3000.  Ready to accept requests!');

})
