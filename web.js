var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var msg = fs.readFileSync('index.html', {encoding : String});

app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
