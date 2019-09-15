var Recipe = require('../models/Recipes');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Recipes',{useNewUrlParser:true});

var Recipes = 
[

    new Recipe({
        recipe_ID: 1,
        recipe_Name: 'Butter Chicken',
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'image/recipe1.jpg'
    })
]

function exit(){
    mongoose.disconnect();
}



