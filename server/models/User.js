const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    cardnumber: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    }


});
module.exports = mongoose.model('Post', UserSchema);