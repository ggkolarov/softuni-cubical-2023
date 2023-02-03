const mongoose = require('mongoose'); // destruction

// creating scheme

const cubeSchema = new mongoose.Schema({
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
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]
});

// creating model

const Cube = mongoose.model('Cube', cubeSchema); // imeto na modela, scheme name

module.exports = Cube;