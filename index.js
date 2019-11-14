
var express = require('express');
var app = express();
var port = process.env.PORT || 3000
const path = require('path');
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
