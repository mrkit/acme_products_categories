var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var nunjucks = require('nunjucks');
var routes = require('./routes');
var db = require('./db');
// var bootstrap = require('bootstrap');
// var $ = require('jquery');

app.use(require('body-parser').urlencoded( { extended: false} ));

// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


// Nunjucks setup
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache:true });

app.use(routes);


app.listen(port, function(){
  console.log(`listening on ${port}`);
});