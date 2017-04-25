var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var fs = require('fs');


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('port', (process.env.PORT || 3000));



app.use(express.static('public'));






app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});