var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var nunjucks = require('nunjucks');
var routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache:true });

app.use(routes)

app.listen(port, function(){
  console.log(`listening on ${port}`);
});