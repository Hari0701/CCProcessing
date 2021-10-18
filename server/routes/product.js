const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.get('/', (req, res) => {
    res.send("I am @ post");
});
router.post('/', (req, res) => {

    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        mandate: req.body.mandate,
        expdate: req.body.expdate
    });
    console.log(post);
    product.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        });
});
module.exports = router;