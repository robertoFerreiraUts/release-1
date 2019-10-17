const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {ensureAuthenticated} = require('../helpers/auth');
const router = express.Router();

// Load User Model
require('../models/payment');
const Del = mongoose.model('payment');

// Register Form POST
router.post('/payment', (req, res) => {
  let errors = [];

  console.log("Price: " +req.session.cart.totalPrice);
  console.log("UserID: " + req.body.userID);
  console.log("trackingID: " + req.body.trackingID);

  if (!req.body.cardnum.match("[0-9]+")) {
    errors.push({text:'Card Number must be digits'});
  }

  if (req.body.cardnum.length < 16) {
    errors.push({text:'Card Number must be 16 digits'});
  }

  if(errors.length > 0){
    res.render('payment', {
      errors: errors,
      cardnum: req.body.cardnum,
      expiredate: req.body.expiredate,
      securitycode: req.body.securitycode,
      phonenum: req.body.phonenum,
      emailaddress: req.body.emailaddress
  });
  } else {
  const newUser = new Del({
    cardnum: req.body.cardnum,
    expiredate: req.body.expiredate,
    securitycode: req.body.securitycode,
    phonenum: req.body.phonenum,
    emailaddress: req.body.emailaddress,
    totalprice: req.session.cart.totalPrice,
    totalqty: req.session.cart.totalQty,
  });
  var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'easygomailing@gmail.com',
    pass: 'n20j15n17'
  }
})

let error = [];
var card = req.body.cardnum;
var splitcard = card.substr(card.length - 4);
var mailOptions = {
  from: 'easygomailing@gmail.com',
  to: req.body.emailaddress,
subject: 'Payment Confirmation',
text: "This is confirmation of your EasyGo Payment!."  + "\n" + "Your delivery ID is " + req.body.trackingID + "\n" + "You purchased a total of " + req.session.cart.totalQty + " items for a total price of $" + req.session.cart.totalPrice + "\n" + "Confirm your payment details below:" + "\n" + "Card Number: ####-####-####-" + splitcard + "\n" + "Phone Number: " + req.body.phonenum
}

transporter.sendMail(mailOptions, function(error, info){
if (error) {
console.log(error);
} else {
console.log('Email sent: ' + info.response);
}
});

  newUser.save()
  .then(user => {
    res.redirect('/orders/createOrder/'+req.body.userID+'&'+req.body.trackingID); //changed from index to createOrder
  })
  }
});

module.exports = router;
