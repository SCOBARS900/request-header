var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('port', (process.env.PORT || 3000));



app.get('/api/whoami', function(req, res) {
    var ipU = req.ip;
    var languageU = req.acceptsLanguages()[0];
    
    res.json({ipadress: ipU, language: languageU, software: softwareU});
});








app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});