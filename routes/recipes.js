var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

require('../models/recipes');
var Del = mongoose.model('recipes');

router.get('/recipeslist', (req, res) => {
    res.render('recipes/recipeslist');
})

app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
  });

module.exports = router;