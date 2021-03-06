const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = mongoose.Schema({
  userID:{
    type: String,
    required: true
  },
  trackingID:{
    type: String,
    required: true
  },
  orderAddress:{
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  },
  orderStatus:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('orders', OrderSchema);
