const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");

//Update
router.put("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);

      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.body.userId,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log("user updated ");
      const { password, ...others } = updatedUser._doc;
      res.status(200).json(others);
    } catch (err) {
      console.error(err);
      res.status(500).json("sever err");
    }
  } else {
    res.status(401).json("not your account");
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    try {
      const user = await User.findById(req.body.userId);
      if (user) {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.body.userId);
        console.log("deleted");
      }
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("not your account");
  }
});

//get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    console.log("done");
    res.status(200).json(others);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
