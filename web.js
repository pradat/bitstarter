var express = require('express');
var fs = require('fs');

var outfile = "index.html";

var app = express.createServer(express.logger());


console.log(fs.readFileSync(outfile).toString());

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send(fs.readFileSync(outfile).toString());
   });


var port = process.env.PORT || 8080;


app.listen(port, function() {
  console.log("Listening on " + port);
});
