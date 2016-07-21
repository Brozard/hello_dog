var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  // The line of code below replaces all commented out code below it.
  req.pipe(res);
  // req.on('readable', function() {
  //   var chunk = null;
  //   while (null !== (chunk = req.read())) {
  //     // The below code is replaced by the line below it.
  //     // console.log(chunk.toString());
  //     res.write(chunk);
  //   }
  // });
  // req.on('end', function() {
  //   res.end();
  // });
}).listen(8080);
