const mongoose = require('mongoose');
const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        requred: true,
        match: [/^http[s]?:\/\//, 'Invalid URL!!!!!'] // regex
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;