const { Schema, model} = require('mongoose'); // destruction

// creating scheme

const cubeSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        // add https validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1
    }
});

// creating model

const Cube = model('Cube', cubeSchema); // imeto na modela, scheme name

module.exports = Cube;