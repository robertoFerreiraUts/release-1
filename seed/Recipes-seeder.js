var Recipe = require('../models/Recipes');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Recipes',{useNewUrlParser:true});

var recipes = 
[

    new Recipe({
        recipe_ID: 1,
        recipe_Name: 'Butter Chicken',
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'image/recipe1.jpg'
    }),

    new Recipe({
        recipe_ID: 2,
        recipe_Name: 'Chocolate Cake',
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'image/recipe2.jpg'
    }),

    new Recipe({
        recipe_ID: 3,
        recipe_Name: 'Spaghetti Bolognese',
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'image/recipe3.jpg'
    }),

    new Recipe({
        recipe_ID: 4,
        recipe_Name: 'Vegetarian Lasagna',
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'image/recipe4.jpg'
    }),

];

var done =0;
for(var i=0; i<recipes.length; i++){
    console.log(recipes);
    recipes[i].save(function(err, result){
        done++;
        if(done === recipes.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}