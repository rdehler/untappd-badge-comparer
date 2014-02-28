

var http = require('http');

exports.getbadges = function(req, res){

  var options = {
    host: 'api.untappd.com',
    port: 80,
    path: '/v4/user/badges/'+req.query.username+'?client_id='+process.env.CLIENT_ID+'&client_secret='+process.env.CLIENT_SECRET,
    method: 'GET'
  };

  var json = '';

  http.request(options, function(res2) {
    res2.setEncoding('utf8');
    res2.on('data', function (chunk) {
      json += chunk.replace(/\\"/g, "'");
    });

    res2.on('end', function() {
      res.send(json);
    });
  }).end();

};
