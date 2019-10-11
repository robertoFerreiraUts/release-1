const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const async = require('async');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const {ensureAuthenticated} = require('../helpers/auth');
const router = express.Router();

// Load Models
require('../models/Order');
require('../models/User');
const Order = mongoose.model('orders');
const User = mongoose.model('users');

// Admin Order management Route
router.get('/orderManagement/:id', (req, res) => {
  // check if admin or not
  User.findOne({
    _id: mongoose.Types.ObjectId(req.params.id)
  })
  .then(user => {
    if (user.privilege == "4") {
      console.log("user is admin");
      var orderArray = Order.find();
      var allOrders = [];
      orderArray.exec(function(err, orders){
        if(err)
          return consol.log(err);
        orders.forEach(function(order){
          var elem = new Object();
          elem["orderID"] = order._id;
          elem["userID"] = order.userID;
          elem["orderAddress"] = order.orderAddress;
          elem["price"] = order.price;
          elem["orderStatus"] = order.orderStatus;
          allOrders.push(elem);
          console.log(elem);
        });
        res.render('orders/orderManagement', {orders: allOrders});
      });
    }
     else{
      console.log("user is not admin");
      var orderArray = Order.find({ userID: user._id});
      var allOrders = [];
      orderArray.exec(function(err, orders){
        if(err)
          return consol.log(err);
        orders.forEach(function(order){
          var elem = new Object();
          elem["orderID"] = order._id;
          elem["userID"] = order.userID;
          elem["orderAddress"] = order.orderAddress;
          elem["price"] = order.price;
          elem["orderStatus"] = order.orderStatus;
          console.log(elem);
          allOrders.push(elem);
          });
        res.render('orders/userOrders', {orders: allOrders});
        });
    }
  })
  // var allOrders = [];
  // orderArray.exec(function(err, orders){
  //   if(err)
  //     return consol.log(err);
  //   orders.forEach(function(order){
  //     var elem = new Object();
  //     elem["orderID"] = order._id;
  //     elem["userID"] = order.userID;
  //     elem["orderAddress"] = order.orderAddress;
  //     elem["price"] = order.price;
  //     elem["orderStatus"] = order.orderStatus;
  //     allOrders.push(elem);
  //     });
  //   });
    // User.findOne({
    //   _id: mongoose.Types.ObjectId(req.params.id)
    // })
    // .then(user => {
    //   if (user.privilege == "4") {
    //     res.render('orders/orderManagement', {orders: allOrders});
    //   } else {
    //     res.render('orders/userOrders', {orders: allOrders});
    //   }
  // });
});

// Admin Order management post
router.put('/orderManagement/:id', (req, res) => {
  Order.findOne({
    _id: mongoose.Types.ObjectId(req.params.id)
  })
  .then(order => {
    order.orderStatus = req.body.changedStatus;
    order.save()
      .then(order => {
        req.flash('success_msg', 'Delivery Status updated');
        res.redirect(303, '/orders/orderManagement');
      })
  });
});

//Check if admin or not
router.get('/accountStatusCheck/:id', (req, res) => {

});

// User Order Route
router.get('/myorder', (req, res) => {
  res.render('orders/orderManagement');

});
// Create order and redirect to payment
router.post('/createOrder/:id', (req, res) => {
  var getPrice = req.query.price;
  User.findOne({
    _id: mongoose.Types.ObjectId(req.params.id)
  })
  .then(user => {
    console.log(getPrice);
    const newOrder = new Order({
      userID: user._id,
      orderAddress: user.email,
      price: "10",
      orderStatus: "Not Delivered"
    });
    newOrder.save()
    .then(order => {
      res.redirect('/payment');
    })
  });
});

module.exports = router;
