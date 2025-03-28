const router = require("express").Router();
const Category = require("../models/Category");

//all cats
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const category = await newCat.save();
    console.log("category created");
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json("sever err");
  }
});

//get
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    console.log("all cats");
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json("sever err");
  }
});

module.exports = router;
