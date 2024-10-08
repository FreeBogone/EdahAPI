const express = require('express');
const router = express.Router();
const Like = require('../models/like');

// Get all comments
router.get('/likes', async (req, res) => {
  try {
    const likes = await Like.find();
    res.json(likes);
    console.log(likes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/likes', async (req, res) => {
  const like = new Like({
    //data fields go here
    // userid: mongoose.Schema.Types.ObjectId,
    // contents: String,
    // type: String,
    // timestamp: Date,
    // username: String
  });

  try {
    const newLike = await like.save();
    res.status(201).json(newLike);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;