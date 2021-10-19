const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {  title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
    },
 }
)

module.exports = mongoose.model('Products', ProductSchema)
