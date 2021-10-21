const express = require("express");
const userPost = require("../models/User");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userpost = await userPost.find();

    res.json(userpost);
  } catch (err) {
    res.json({ message: err });
  }
});
router.patch("/:cardnumber", async (req, res) => {
  try {
    const userpost = await userPost.updateOne(
      { cardnumber: req.params.cardnumber },
      { $set: { balance: req.body.balance } }
    );
    res.json(userpost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
