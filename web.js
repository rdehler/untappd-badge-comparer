var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

var https = require("http");
var optionsget = {
host: 'api.untappd.com',
port: '80',
path: '/v4/user/info/rdehler?client_id=DE2486E62F8B6DFBF0F5089CCE0EEBD09DBEFAB5&client_secret=8804D03E2BA53910C5E02AFBC051D100943387F4',
method: 'GET'
};


app.get('/', function(req, res) {
  http.request(optionsget, function(res2) {
    res2.setEncoding('utf8');
    res2.on('data', function(chunk) {
      res.send(chunk);
    });
  });
  res.send('Hello World! (2)');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
