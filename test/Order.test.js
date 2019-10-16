const request = require('supertest');
const {ensureAuthenticated} = require('../helpers/auth');
const app = require('../app');
const Order = require('../models/Order');
const User = require('../models/User');
const mongoose = require('mongoose')
const databaseName = 'test'

test('Should access admin order log', async() => {
    await request(app).post('/users/login').send({
        email: 'admin@admin.com',
        password: 'admin'
    }).then(function(){
      request(app).get('/orders/orderManagement/5d9088af26c17b00172837aa')
      .expect('Location', '/orders/orderManagement')
      .expect(302)
    });
})

test('Should access user order list', async() => {
    await request(app).post('/users/login').send({
        email: 'qwer@qwer.com',
        password: 'qwer'
    }).then(function(){
      request(app).get('/orders/orderManagement/5d7f3ec434106f001727a11c')
      .expect('Location', '/orders/userOrders')
      .expect(303)
    });
})

test('Should create an order', async() => {
    await request(app).post('/users/login').send({
        email: 'admin@admin.com',
        password: 'admin'
    })
    .then(function(){
      request(app).put('/orders/createOrder/5d9088af26c17b00172837aa').send({
        price: '45'
      })
      .expect(303);
    });
})

test('Should not create order', async() => {
    await request(app).post('/users/login').send({
        email: 'admin@admin.com',
        password: 'admin'
    }).then(function(){
      request(app).put('/orders/createOrder/lol').send({
        price: '45'
      })
      .expect(404);
    });
})

test('Should update order status', async() => {
    await request(app).post('/users/login').send({
        email: 'admin@admin.com',
        password: 'admin'
    }).then(function(){
      request(app).put('/orders/orderManagement/5d91a1cfc9b0cb001754bf6b').send({
        changedStatus : 'Deilivered'
      })
      .expect(303);
    });
})

test('Should not update order status', async() => {
    await request(app).post('/users/login').send({
        email: 'admin@admin.com',
        password: 'admin'
    }).then(function(){
      request(app).put('/orders/orderManagement/willnotwork').send({
        changedStatus : 'Deilivered'
      })
      .expect(404);
    });
})
