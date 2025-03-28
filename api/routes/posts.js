const router = require("express").Router();
const Post = require("../models/Post");

//new post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    console.log("post created");
    res.status(200).json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json("sever err");
  }
});

// update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (req.body.username === post.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        console.log("post updated");
        res.status(200).json(updatedPost);
      } catch (error) {
        console.error(err);
        res.status(500).json("sever err");
      }
    } else {
      res.status(401).json("not your post");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("sever err");
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (req.body.username === post.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        console.log("post deleted");
        res.status(200).json(post);
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {}
});

//get all post
router.get("/?", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({ categories: { $in: [catName] } });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
