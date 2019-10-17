const request = require('supertest');
const {ensureAuthenticated} = require('../helpers/auth');
const app = require('../app');
const User = require('../models/User');

const Del = require('../models/delivery');
const mongoose = require('mongoose')
const databaseName = 'test'

test('Should input stage one of delivery details', async() => {
  const response =  await request(app).post('/delivery/delivery').send({
    streetNumber: '1/1',
    streetName: 'Test St',
    suburb: 'Testburg',
    postcode: '1010',
    state: 'NSW'
        
    }).expect(302)
})

test('Should input stage two of delivery details', async() => {
    const response =  await request(app).post('/delivery/deliveryDT').send({
      streetNumber: '1/1',
      streetName: 'Test St',
      suburb: 'Testburg',
      postcode: '1010',
      state: 'NSW',
      DeliveryDate: 'date+2',
      DeliveryTime: '8am'
          
      }).expect(200)
  })
   
test('should find delivery for tracking', async() => {
    const response =  await request(app).get('/delivery/deliveryTracking').query({ id: '5da79178ceb0153dd4bb7147' })
    .expect(200)
})

test('should not find delivery for tracking', async() => {
    const response =  await request(app).get('/delivery/deliveryTracking').query({ id: '6da79178ceb0153dd4bb7148' })
    .expect(302)
})

test('Should get delivery tracking page', async() => {
    await request(app)
    .get('/deliveryTracking').expect(200);
}) 
 
