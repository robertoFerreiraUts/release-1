var Recipe = require('../models/Recipes');

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin1:admin1@ds263927.mlab.com:63927/heroku_fw9f58vn',{ useNewUrlParser: true });
var recipes = 
[

    new Recipe({
        recipe_ID: 1,
        recipe_Name: 'Butter Chicken',
        recipe_Tag: 'ButterChicken',
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        description: 'Learn how to make Butter Chicken', 
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'images/recipe1.jpg'
    }),

    new Recipe({
        recipe_ID: 2,
        recipe_Name: 'Chocolate Cake',
        recipe_Tag: 'ChocolateCake',
        description: 'Learn how to make Chocolate Cake', 
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'images/recipe2.jpg'
    }),

    new Recipe({
        recipe_ID: 3,
        recipe_Name: 'Spaghetti Bolognese',
        recipe_Tag: 'SpaghettiBolognese',
        description: 'Learn how to make Spaghetti Bolognese', 
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'images/recipe3.jpg'
    }),

    new Recipe({
        recipe_ID: 4,
        recipe_Name: 'Vegetarian Lasagna',
        recipe_Tag: 'VegetarianLasagna',
        description: 'Learn how to make Vegetarian Lasagna', 
        item: '600g Chicken, 1/2 cup Yoghurt, 410g Tomato puree, 1/2 cup Cream, 1 Onion, 2 cloves Garlic, 1/4 teaspoon chilli powder',
        instructions: '1. Place yoghurt, garlic and chilli powder into a dish. 2. Add chicken, stir to coat and refridgerate for 2 hours',
        image: 'images/recipe4.jpg'
    }),

    new Recipe({
        recipe_ID: 5,
        recipe_Name: 'Italian Style Lemon Chicken',
        recipe_Tag: 'LemonChicken',
        description: 'Learn how to make Italian Style Lemon Chicken', 
        item: '3 Chicken Breasts, 3 Lemons, 100g Butter, 2 gloves Garlic, 1 tomato, 2 onions, 50g feta',
        instructions: '1. Place 1 piece of chicken between 2 sheets of plastic wrap. Use a meat mallet or rolling pin to gently pound until 1.5cm thick. Repeat with the remaining chicken. Season well. 2. Add the chicken to the pan and cook for 2 mins each side or until the chicken is golden brown and just cooked through. Place remaining butter in the pan and cook, stirring, for 2-3 mins or until the butter melts and is golden brown. Add the garlic and capers to the pan and cook for 1 min or until the capers are crisp. Add the lemon zest and lemon juice and stir to combine.',
        image: 'images/recipe5.jpg'
    }),

    new Recipe({
        recipe_ID: 6,
        recipe_Name: 'Parmesan Chicken',
        recipe_Tag: 'ParmesanChicken',
        description: 'Learn how to make Parmesan Chicken', 
        item: '3 Chicken Breasts, 5 tbsp Parmesan, 400g Potatoes, 100g Peas, handful Baby Spinach',
        instructions: '1. Heat grill to medium and line the grill pan with foil. Beat the egg white on a plate with a little salt and pepper. Tip the parmesan onto another plate. Dip the chicken first in egg white, then in the cheese. Grill the coated chicken for 10-12 mins, turning once until browned and crisp. 2. Meanwhile, boil the potatoes for 10 mins, adding the peas for the final 3 mins, then drain. Toss the vegetables with the spinach leaves, vinegar, oil and seasoning to taste. Divide between four warm plates, then serve with the chicken.',
        image: 'images/recipe6.jpg'
    }),

    new Recipe({
        recipe_ID: 7,
        recipe_Tag: 'HarissaandTomatoChicken',
        recipe_Name: 'Harissa and Tomato Chicken',
        description: 'Learn how to make Harissa and Tomato Chicken', 
        item: '3 Chicken Breasts, 250g Cherry Tomatoes, Handful of Olives, 2 tsp Harissa',
        instructions: '1. Heat oven to 200C/fan 180C/gas 6. Put the chicken into a medium roasting tray, then rub with the harissa, oil and oregano. 2. Cover with foil and roast for 5 mins, then remove the foil and add the cherry tomatoes and olives to the tray. Roast for 10 mins more until the tomato skins start to split and the chicken is cooked through.',
        image: 'images/recipe7.jpg'
    }),

    new Recipe({
        recipe_ID: 8,
        recipe_Name: 'Sweet and Sour Chicken',
        recipe_Tag: 'SweetandSourChicken',
        description: 'Learn how to make Sweet and Sour Chicken', 
        item: '3 Chicken Breasts, 9 tbsp Ketchup, 3 tbsp malt Vinegar, Can of Pineapple pieces, 2 Garlic Cloves, 2 Red Peppers.',
        instructions: '1. In a large microwaveable dish, mix the ketchup, vinegar, sugar and garlic thoroughly with the chicken, onion and peppers. Microwave, uncovered, on High for 8-10 minutes until the chicken is starting to cook and the sauce is sizzling. 2. Stir in the pineapple pieces and sugar snap peas and return to the microwave for another 3-5 minutes until the chicken is completely cooked. Leave to stand for a few minutes, then stir in the cashews, if using, and serve.',
        image: 'images/recipe8.jpg'
    }),

    new Recipe({
        recipe_ID: 9,
        recipe_Name: 'Beef Stroganoff',
        recipe_Tag: 'BeefStroganoff',
        description: 'Learn how to make Beef Stroganoff', 
        item: '500g Mince Beef, 1/4 Cup Onion, 1/4 Cup Mushrooms, 1/3 Cup Sour Cream, 1 Garlic Clove ',
        instructions: '1. In a large skillet, cook beef and onion in butter over medium heat until meat is no longer pink. Stir in the mushrooms, flour, garlic, salt and pepper. Cook and stir for 5 minutes. Add chili sauce and Worcestershire sauce. Reduce heat; cook, uncovered, for 10 minutes. Stir in sour cream just before serving; heat through (do not boil). Serve with noodles.',
        image: 'images/recipe9.jpg'
    }),

    new Recipe({
        recipe_ID: 10,
        recipe_Name: 'Beef Skewers',
        recipe_Tag: 'BeefSkewers',
        description: 'Learn how to make Beef Skewers', 
        item: '500g Beef Steak, 2 Capsicums, 1 Tomato, 5 tbsp Taco Seasoning',
        instructions: '1. In a large shallow dish, combine the taco seasoning, tomato juice and oil; mix well. Remove 1/2 cup for basting; refrigerate. Add beef and turn to coat. Cover; refrigerate for at least 5 hours. Drain and discard marinade from beef. On metal or soaked wooden skewers, alternately thread beef, peppers, onion and tomatoes. Grill, uncovered, over medium heat for 3 minutes on each side. Baste with reserved marinade. Continue turning and basting for 8-10 minutes or until meat reaches desired doneness. If desired, serve with salsa con queso or sour cream.',
        image: 'images/recipe10.jpg'
    }),

    new Recipe({
        recipe_ID: 11,
        recipe_Name: 'Pepper Steak',
        recipe_Tag: 'PepperSteak',
        description: 'Learn how to make Pepper Steak', 
        item: '400g Beef Steak, 3 Onions, 2 Capsicums, 1 can beef broth, 3/4 Garlic Clove',
        instructions: '1. In a bowl, combine the cornstarch, brown sugar, ginger and garlic powder. Stir in broth until smooth. Add soy sauce and molasses; set aside. In a nonstick skillet or wok, stir-fry steak in oil for 4-5 minutes; remove and keep warm. Stir-fry peppers, celery and onions until crisp-tender, about 5 minutes. Stir broth mixture and add to the vegetables. Return meat to the pan. Bring to a boil; cook and stir until thickened, about 2 minutes. Stir in lemon juice. Serve over noodles if desired.',
        image: 'images/recipe11.jpg'
    }),

    new Recipe({
        recipe_ID: 12,
        recipe_Name: 'Beef Burger',
        recipe_Tag: 'BeefBurger',
        description: 'Learn how to make Beef Burger', 
        item: '1kg Ground Beef, 4 Hamburger Buns, Head of Lettuce, 1 Tomato, 4 Slices of Cheese, 4tbsp of Ketchup',
        instructions: '1. Shape into four 3/4-in.-thick patties. Press patties into flour to lightly coat both sides. 2. In a large cast-iron or other heavy skillet, cook burgers over medium heat until a thermometer reads 160°, 4-5 minutes per side. Layer bun bottoms with salad dressing, lettuce, burgers, cheese, onion and tomato slices. Replace bun tops.',
        image: 'images/recipe12.jpg'
    }),

    new Recipe({
        recipe_ID: 13,
        recipe_Name: 'Citrus and Pomegranite Salad',
        recipe_Tag: 'CitrusandPomegraniteSalad',
        description: 'Learn how to make Citrus and Pomegranite Salad', 
        item: '1 Pomegranite, 3 Oranges, 1 Grapefruit, 5 Mint Leavesw',
        instructions: '1. Cut the grapefruit and oranges into large slices and arrange on a large serving tray. 2. Sprinkle pomegranate seeds and fresh mint sprigs over the sliced citrus and serve.',
        image: 'images/recipe13.jpg'
    }),

    new Recipe({
        recipe_ID: 14,
        recipe_Name: 'Pea and Pistachio Pesto',
        recipe_Tag: 'PeaandPistachioPesto',
        description: 'Learn how to make Pea and Pistachio Pesto', 
        item: '1/2 Cup Pistachios, 200g Peas, 1 Lemon, 1 Garlic Clove',
        instructions: '1. In a food processor, pulse together everything except for the olive oil. Drizzle the oil in slowly while the blade is running. Add as much or little olive oil as you want. Less oil will make a chunkier pesto, more olive oil will make it more smooth.',
        image: 'images/recipe14.jpg'
    }),

    new Recipe({
        recipe_ID: 15,
        recipe_Name: 'Creamed Corn',
        recipe_Tag: 'CreamedCorn',
        description: 'Learn how to make Creamed Corn', 
        item: '500g Corn, 300g Cream Cheese, 3tbs Milk, 50g Butter',
        instructions: '1. Add corn, milk, butter and salt (and sugar, if using) in the bowl of a slow cooker, and stir to combine.  Place the cream cheese on top of the corn.  Then cover and cook on high for 2-3 hours, or on low for 4-6 hours, or until the cheese is completely melted and the mixture is warmed through.  Stir until evenly combined.',
        image: 'images/recipe15.jpg'
    }),

    new Recipe({
        recipe_ID: 16,
        recipe_Name: 'Spinach and Feta Dip',
        recipe_Tag: 'SpinachandFetaDip',
        description: 'Learn how to make Spinach and Feta Dip', 
        item: '1 Cup Spinach, 1/2 Cup Feta, 2 Cups Greek Yoghurt',
        instructions: '1. Start by defrosting the frozen spinach, drain all the liquid and pat dry with a paper towel. 2. In a bowl stir together the Greek Yogurt, spinach, garlic and salt, stir until combined. Spread onto a plate and top with feta crumbles and walnut pieces on top.',
        image: 'images/recipe16.jpg'
    }),

    new Recipe({
        recipe_ID: 17,
        recipe_Name: 'Peanut Butter Cookies',
        recipe_Tag: 'PeanutButterCookies',
        description: 'Learn how to make Peanut Butter Cookies', 
        item: '1 Cup Peanut Butter, 1 Cup Sugar, 1 Egg, 50g Chocolate pieces',
        instructions: '1. Preheat oven to 350°. Cream peanut butter and sugar until light and fluffy. Beat in egg and vanilla. 2. Roll into 1-1/4-in. balls. Place 2 in. apart on ungreased baking sheets. Bake until tops are slightly cracked, 10-12 minutes. Immediately press 1 chocolate kiss into center of each cookie. Cool for 5 minutes before removing from pans to wire racks.',
        image: 'images/recipe17.jpg'
    }),

    new Recipe({
        recipe_ID: 18,
        recipe_Name: 'Pecan Caramel Candies',
        recipe_Tag: 'PecanCaramelCandies',
        description: 'Learn how to make Pecan Caramel Candies', 
        item: '54 Pecans, 54 Pretzels, 54 Rolo Pieces',
        instructions: '1. Preheat oven to 250°. Place pretzels 1 in. apart on foil-lined baking sheets. Top each with a Rolo candy. 2. Bake 3-4 minutes or until candies are softened. (Rolos will still retain their shape.) Immediately top with pecans, pressing to spread candy into pretzel. Let stand until set.',
        image: 'images/recipe18.jpg'
    }),

    new Recipe({
        recipe_ID: 19,
        recipe_Name: 'Blueberry Pies',
        recipe_Tag: 'BlueberryPies',
        description: 'Learn how to make Blueberry Pies', 
        item: '2 Cups Blueberries, 1 Cup Sugar, 2 Sheets Pie Crust, 1 Egg Yolk',
        instructions: '1. Preheat oven to 425°. Crush half of the blueberries. Sift together sugar and cornstarch. Add whole and crushed blueberries; toss until berries are well coated. Set aside. 2. On a lightly floured surface, unroll crusts. Cut out six 4-1/2-in. circles; press circles onto bottoms and up sides of greased muffin cups. Evenly spoon in blueberry mixture. Cut out six 2-in. circles from remaining crust; place over filling. Brush with yolk. 3. Bake until crust is golden and filling bubbles, 13-17 minutes. Cool in pans 10 minutes; run a knife around sides of muffin cups and remove tarts to a serving plate.',
        image: 'images/recipe19.jpg'
    }),

    new Recipe({
        recipe_ID: 20,
        recipe_Name: 'Cranberry Pecan Cookies',
        recipe_Tag: 'CranberryPecanCookies',
        description: 'Learn how to make Cranberry Pecan Cookies', 
        item: '1 tube Cookie Dough, 2/3 Cup Cranberries, 1 Cup Pecans',
        instructions: '1. Preheat oven to 350°. In a large bowl, combine cookie dough, pecans, chips, cranberries and vanilla. Drop by tablespoonfuls 2 in. apart onto ungreased baking sheets. 2. Bake until lightly browned, 10-12 minutes. Cool 2 minutes before removing from pans to wire racks. Store in an airtight container.',
        image: 'images/recipe20.jpg'
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