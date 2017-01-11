var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, resp){
  var html = '<h1>Hello and Welcome!</h1>';
  html += '<a href="/rabbit_hole">Right this way</a>';
  resp.send(html);
})


var port = 3000;
app.listen(port, function(){
  console.log('Up');
})
