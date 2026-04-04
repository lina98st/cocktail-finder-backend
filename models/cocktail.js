const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const cocktailSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
        image: {
        type: String,
        required: true,
    },
        category: {
        type: String,
        required: true,
    },
        alcoholic: {
        type: String,
        required: true,
    },
        glass: {
        type: String,
        required: true,
    },
        instructions: {
        type: String,
        required: true,
    },
ingredients: [ingredientSchema] 
}, {
    timestamps: true
});

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

module.exports = Cocktail;