var router = require('express').Router();
var db = require('../db');

router.get('/', function(req, res, next){
  res.render('index', {
    title: db.getCategoryNames()
  });
});

router.get('/:category', function(req, res, next){
  var category = req.params.category;
  res.render('category', { category: category, 
                            products: db.getProductsByCategory(category) });
});

router.post('/:category/new_product/:name', function(req, res, next){
  res.send(req.body.name);
});

module.exports = router;