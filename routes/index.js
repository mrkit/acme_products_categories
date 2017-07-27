var router = require('express').Router();
var db = require('../db');

router.get('/', function(req, res, next){
  res.render('index', {
    title: db.getCategoryNames()
  });
});

router.get('/category/:category', function(){
  res.render('category', {
    category: req.params.name
  })
});


module.exports = router;