// const RecipeModel = require('../models/Recipes');

// module.exports = (app) => {

//     app.post('recipes/searchRecipes', (req, res) => {

//         const searchValue = req.body.searchValue;

//         RecipeModel
//             .find({"item": /searchValue/})
//             .exec((data, err) => {
//                 if(err) return res.send(err);
//                 res.status(200).json(data);
//             });

//     });

// }