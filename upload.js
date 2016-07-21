var http = require('http');
var fs = require('fs');

// var file = fs.createReadStream("readme.md");

http.createServer(function(req, res) {
  var newFile = fs.createWriteStream("readme_copy.md");
  var fileBytes = req.headers['content-length'];
  var uploadedBytes = 0;
  req.on('readable', function() {
    var chunk = null;
    while(null !== (chunk = req.read())){
      uploadedBytes += chunk.length;
      var progress = (uploadedBytes / fileBytes) * 100;
      res.write("progress: " + parseInt(progress, 10) + "%\n");
    }
  });
  req.pipe(newFile);
  req.on('end', function() {
    res.end('Uploaded!');
  });
}).listen(8080);
