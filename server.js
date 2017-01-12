var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/', function(req, resp){
  var html = '<h1>Hello and Welcome!</h1>';
  html += '<a href="/rabbit_hole">Right this way</a>';
  resp.send(html);
})

app.get('/rabbit_hole', function(req, resp){
  var html = "<h1>I'm running late!</h1>";
  html += '<a href="/off_with_their?part=head">Off with their head!</a>';
  resp.send(html);
})

// var choice = ' head';
app.get('/off_with_their', function(req, resp){
      var choice = req.query.part;
      var html = '<h1>Off with their ';
      html += req.query.part;
      html += '!</h1>';
      resp.send(html);
})

app.get('/characters/hatter', function(req, resp){
  var html = '<h1>Have a cuppa</h1>';
  resp.send(html);
})

app.get('/characters/queen', function(req, resp){
  resp.redirect('/off_with_their?part=head');
})

app.get('/elevator', function(req, resp){
  var html = '<form method="GET" action="/floor"><input type="text" name="number"> <button>Go!</button></form>';
  resp.send(html);
})

app.get('/floor', function(req, resp){
  var html = '<h1>Floor number ' + req.query.number + '</h1>';
  resp.send(html);
})

app.get('/characters/cheshire_cat', function(req, resp){
  var html = '<form method="POST" action="/dumb_waiter"><input type="radio" name="show" value="Show"> Show<br><input type="radio" name="hide" value="Hide"> Hide<br><button>Submit</button></form>';
  resp.send(html);
})

app.post('/dumb_waiter', function(req, resp){
  if(req.body.show === 'Show'){
    resp.redirect('/curious?visit=show');
  } else {
      resp.redirect('/curious?visit=hide');
    }

})

app.get('/curious', function(req, resp){
  var html;
  if(req.query.visit === 'show'){
    html = '=^..^=';
    resp.send(html);
  } else if(req.query.visit === 'hide'){
      html = ':)';
      resp.send(html);
    }
})


var port = 3000;
app.listen(port, function(){
  console.log('Up');
});
