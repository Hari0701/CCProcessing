const express = require("express");
const userPost = require("../models/User");
const router = express.Router();

router.get("/:cardNumber/:pin", async (req, res) => {
  try {
    const userpost = await userPost.findOne(
      { cardnumber: `${req.params.cardNumber}` },
      { pin: `${req.params.pin}` }
    );
   
    res.json(userpost);
  } catch (err) {
    res.json({ message: err });
  }
});
 
module.exports = router