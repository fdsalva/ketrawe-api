const mongoose = require('mongoose');

const plantsAndPots = mongoose.model('plantsAndPots', {
    name : {
        type: String,
        required: true        
        },
    price: {
        type: Number,
        required: true
    },
    img: { 
        type: String,
        required: true
    }
});

module.exports = plantsAndPots;