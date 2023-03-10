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
        maxLength: 50 // check real length
    },
    imageUrl: {
        type: String,
        required: true,
        // match: /^http[s]?:\/\// // regex
        validate: {
            validator: function(value) {
                return value.startsWith('http://') ||  value.startsWith('https://')
            },
            message: 'URL is invalid!'
        }
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
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

// creating model

const Cube = mongoose.model('Cube', cubeSchema); // imeto na modela, scheme name

module.exports = Cube;