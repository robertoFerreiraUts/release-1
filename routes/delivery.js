const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {ensureAuthenticated} = require('../helpers/auth');
const router = express.Router();

// Load User Model
require('../models/delivery');
const Del = mongoose.model('delivery');
const thisDel = new Del;

// User Login Route
router.get('/delivery', (req, res) => {
  res.render('/delivery');
});
router.get('/deliveryTracking', (req, res) => {
  var ID = req.query.id;
  var objID = mongoose.Types.ObjectId(ID);
    Del.findOne({_id:[objID]}, function(err, item) {  
      //console.log("FOUND: " + item)
      
      var trackDel = [];
      var elem = new Object();
      elem["streetName"] = item.streetName;
      elem["streetNum"] = item.streetNumber;
      elem["suburb"] = item.suburb;
      elem["postcode"] = item.postcode;
      elem["state"] = item.state;
      elem["date"] = item.estDel;

      trackDel.push(elem);
      console.log(trackDel);
      if (trackDel.length > 0) {
      res.render('deliveryTracking', {delivery: trackDel});
      }
    });
});

var del4Date;

// Register Form POST
router.post('/delivery', (req, res) => {
  const newUser = new Del({
    streetNumber: req.body.streetNumber,
    streetName: req.body.streetName,
    suburb: req.body.suburb,
    postcode: req.body.postcode,
    state: req.body.state
  });
  del4Date = newUser;
  /*
  newUser.save()
  
  .then(user => {
    */
    res.redirect('/courier');
  //})
  
});


var xID;
router.post('/deliveryDT', (req, res) => {
  const newUser = new Del({
    streetNumber: del4Date.streetNumber,
    streetName: del4Date.streetName,
    suburb: del4Date.suburb,
    postcode: del4Date.postcode,
    state: del4Date.state,
    DeliveryDate: req.body.DeliveryDate,
    DeliveryTime: req.body.DeliveryTime
  });
  newUser.save(function(err){
    console.log(newUser._id)
    xID = newUser._id;
    var payDel = [];
        var elem = new Object();
        elem["id"] = xID;
  
        console.log("Xid: " + xID);
        payDel.push(elem);
        console.log(payDel);
        if (payDel.length > 0) {
        res.render('payment', {delivery: payDel});
        }
    del4Date = null;
 })/*
  .then(user => {
    
  }) */
});

module.exports = router;
