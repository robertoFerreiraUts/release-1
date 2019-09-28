const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const async = require('async');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const {ensureAuthenticated} = require('../helpers/auth');
const router = express.Router();

// Load Order Model
require('../models/Order');
const Order = mongoose.model('orders');

// Admin Order management Route
router.get('/orderManagement', (req, res) => {
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
});

// User Order Route
router.get('/myorder', (req, res) => {
  res.render('orders/orderManagement');

});

module.exports = router;
