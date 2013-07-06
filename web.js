var express = require('express');
var fs = require('fs');

var outfile = "index.html";

var app = express.createServer(express.logger());

console.log(fs.readFileSync(outfile).toString());

console.log("Test");

app.get('/', function(request, response) {
    response.send(fs.ReadFileSync(outfile).toString());
   });


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
