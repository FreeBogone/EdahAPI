const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
    console.log(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/posts', async (req, res) => {
  const post = new Post({
    //data fields go here
    // userid: mongoose.Schema.Types.ObjectId,
    // contents: String,
    // type: String,
    // timestamp: Date,
    // username: String
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
