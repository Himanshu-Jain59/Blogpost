const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All Fields Are Required!" });
    }
    const checkUsers = await User.findOne({ $or: [{ email }, { username }] });
    if (checkUsers) {
      return res
        .status(400)
        .json({ error: "Username and email already exist" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username,
        email,
        password: hash,
      });
      const user = await newUser.save();
      console.log("user registered");
      res.status(200).json(user);
    }
  } catch (err) {
    // if (err.code == 11000) {
    //   alert("user already exists");
    // }
    // console.log(err);
    // console.error(err.code);

    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) return res.status(400).json("wrong credentials");
    const validate = await bcrypt.compare(req.body.password, user.password);

    if (!validate) return res.status(400).json("wrong credentials");
    console.log("Loggen in ");

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    console.error(err);

    res.status(500).json(err);
  }
});

module.exports = router;
