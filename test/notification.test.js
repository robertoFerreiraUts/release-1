const request = require('supertest');
const {ensureAuthenticated} = require('../helpers/auth');
const app = require('../app');
const User = require('../models/User');
const payment = require('../models/payment');
const mongoose = require('mongoose')
const databaseName = 'test'

test('Should input payment details', async() => {
const response =  await request(app).post('/payment').send({
     cardnum: '1234567891234567',
     expiredate: 'October 2019',
     securitycode: '1234',
     phonenum: '0412345678',
     emailaddress: 'joshuachun@outlook.com'
     }).expect(200)
 })

 test('Should not input incorrect card number', async() => {
     const response =  await request(app).post('/payment').send({
       cardnum: '1234',
       expiredate: 'October 2019',
       securitycode: '1234',
       phonenum: '0412345678',
       emailaddress: 'joshuachun@outlook.com'
       }).expect(200)
   })

 test('Should get payment page', async() => {
     await request(app)
     .get('/payment').expect(200);
 }) 
 
 afterEach(async () => {
     await User.deleteMany()
   })

