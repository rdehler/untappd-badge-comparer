var options = {
  host: 'api.untappd.com',
  port: 80,
  path: '/v4/user/badges/rdehler?client_id='+process.env.CLIENT_ID+'&client_secret='+process.env.CLIENT_SECRET,
  method: 'GET'
};

var http = require('http');
var json = '';

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    json += chunk.replace(/\\"/g, "'");
  });

}).end();


exports.index = function(req, res){
  res.render('index', { json: json });
};
