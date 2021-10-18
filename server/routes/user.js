const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.get('/', (req, res) => {
    res.send("I am @ post");
});
router.post('/', (req, res) => {

    const user = new User({
        cardnumber: req.body.cardnumber,
        pin: req.body.pin,
        balance: req.body.balance
    });
    console.log(post);
    user.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        });
});
module.exports = router;