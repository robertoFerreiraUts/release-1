const request = require('supertest');
const app = require('../app');
const Recipes = require('../models/Recipes');
const mongoose = require('mongoose')

test('Load Page', async() => {
    await request(app).get('/recipes/recipeslist').send({
    }).expect(302)
})
