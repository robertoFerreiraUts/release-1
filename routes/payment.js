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
  res.render('/payment');
});

// Register Form POST
router.post('/payment', (req, res) => {
  const newUser = new Del({
    cardnum: req.body.cardnum,
    expiredate: req.body.expiredate,
    securitycode: req.body.securitycode,
    phonenum: req.body.phonenum,
  });
  newUser.save()
  .then(user => {
    res.redirect('/');
  })
  
});

module.exports = router;
