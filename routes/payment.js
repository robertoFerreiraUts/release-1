const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {ensureAuthenticated} = require('../helpers/auth');
const router = express.Router();

// Load User Model
require('../models/payment');
const Del = mongoose.model('payment');

// User Login Route
router.get('/payment', (req, res) => {
  res.render('/users/payment');
});

// Register Form POST
router.post('/payment', (req, res) => {
  const newUser = new Del({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    city: req.body.city,
    postcode: req.body.postcode,
    card_num: req.body.card_num,
    expire_date: req.body.expire_date,
    security_code: req.body.security_code,
    phone_num: req.body.phone_num,
    price: req.body.price
  });
  newUser.save()
  .then(user => {
    res.redirect('/');
  })
  
});

module.exports = router;
