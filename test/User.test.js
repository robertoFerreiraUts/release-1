const mongoose = require('mongoose');
const mongoDB = "mongodb://localhost/LocalDev";
mongoose.connect(mongoDB);
const chai = require('chai');
const expect = chai.expect;
const User = require('../models/User');

const db = require('../config/database');



describe('User model', ()=> {
    it('should return error is required areas are missing', (done) =>{
        let user = new User();

        user.validate((err)=> {
            expect(err.errors.firstname).to.exist;
            expect(err.errors.lastname).to.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.password).to.exist;

            done();

        })
    })
})
