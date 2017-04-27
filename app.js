var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');


var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());


app.set('port', (process.env.PORT || 3000));



app.get('/userinfo', function(req, res) {
    var ipU = req.ip;
    var languageU = req.acceptsLanguages()[0];
    var softwareU = req.useragent.os;
    
    if (ipU.substr(0, 7) == "::ffff:") {
    ipU = ipU.substr(7)
    }
    
    res.json({ipadress: ipU, language: languageU, software: softwareU});
});








app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});