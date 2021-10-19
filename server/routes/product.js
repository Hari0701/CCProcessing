const express = require("express");
const mongoose = require("mongoose");
const Products = require("../models/Product");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const productpost = await Products.find();
    res.json(productpost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const productpost = new Products({
    title: req.body.title,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  try {
    const savedPost = await productpost.save();
    console.log(savedPost);
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
