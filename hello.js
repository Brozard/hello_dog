var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('Dog is running.');
  // This isn't working as intended. We should get 'Dog is running.' immediately, and then 'Dog is done running.' 5 seconds later.
  // Instead, we're getting both messages at the same time, when the function ends. Not sure why that's happening.
  // This likely has to do with the tutorial using a pre-1.0.0 Node...
  // ...while I'm using Node 4.4.7 
  setTimeout(function(){
    response.end('Dog is done running.');
  }, 5000);
}).listen(8080);
console.log('Listening to port 8080...');