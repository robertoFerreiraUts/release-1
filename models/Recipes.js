var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    recipe_ID: {
        type: Number,
        required: true
    },

    recipe_Name: {
        type: String,
        required: true
    },

    item: {
        type: String,
        required: true
    },

    instructions: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Recipes', schema);