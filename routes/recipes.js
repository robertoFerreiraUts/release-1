var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

require('../models/recipes');
var Del = mongoose.model('recipes');

router.get('/recipeslist', (req, res) => {
    res.render('recipes/recipeslist');
})

router.get('/chicken', (req, res) => {
  res.render('recipes/chicken');
});

router.get('/beef', (req, res) => {
  res.render('recipes/beef');
});

router.get('/vegetarian', (req, res) => {
  res.render('recipes/vegetarian');
});

router.get('/dessert', (req, res) => {
  res.render('recipes/dessert');
});

router.get('/CreateRecipe', (req, res) => {
  res.render('recipes/CreateReceipe');
})

app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
  });

module.exports = router;