var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');

var message1 = 'I am so happy to be part of the Node Girls workshop!';
var message2 = 'You are on the girls page!';

function handler (request, response) {

  var endpoint = request.url;
  console.log(endpoint);
  var method = request.method;

  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(path.join(__dirname, 'public/index.html'), function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  } else{
      var extension = endpoint.split('.')[1];
      var extensionType = {
        "html": "text/html",
        "css": "text/css",
        "js": "application/javascript",
        "ico": "image/x-icon",
        "jpg": "image/jpg",
        "png": "image/png"
      };
      fs.readFile(path.join(__dirname, "public", endpoint), function(error, file) {
        if (error) {
          console.log(error);
          return;
        }
        response.writeHead(200, {"Content-Type": extensionType[extension]});
        response.end(file);

  });

  var allTheData = '';
  request.on('data', function (chunkOfData) {

      allTheData += chunkOfData;
  });

  request.on('end', function () {

      var convertedData = querystring.parse(allTheData);
      response.writeHead(302, {"Location": '/'});
      response.end();
  });
}



}

var server = http.createServer(handler);
server.listen(3000, function(){
  console.log('Server is listening on port 3000.  Ready to accept requests!');

})
