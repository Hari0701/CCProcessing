const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
    },
    mandate: {
        type: Date,
    },
    expdate: {
        type: Date,
    }


});
module.exports = mongoose.model('Post', ProductSchema);