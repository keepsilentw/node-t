var http = require('http');
var url = require('url');

function start(route, handle) {
  function handleRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received');
    route(handle, pathname, response, request);
  };

  http.createServer(handleRequest).listen(8888);
  console.log('Server has started');
}

exports.start = start;
