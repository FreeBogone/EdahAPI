const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
    console.log(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/comments', async (req, res) => {
  const comment = new Comment({
    //data fields go here
    // userid: mongoose.Schema.Types.ObjectId,
    // contents: String,
    // type: String,
    // timestamp: Date,
    // username: String
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;