const express = require('express');
const router = express.Router();
const Friend = require('../models/friend');

// Get all comments
router.get('/friends', async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
    console.log(friends);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/friends', async (req, res) => {
  const friend = new Friend({
    //data fields go here
    // userid: mongoose.Schema.Types.ObjectId,
    // contents: String,
    // type: String,
    // timestamp: Date,
    // username: String
  });

  try {
    const newFriend = await friend.save();
    res.status(201).json(newFriend);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;