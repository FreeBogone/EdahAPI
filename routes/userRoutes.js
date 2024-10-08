const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/users', async (req, res) => {
  const user = new User({
    // username: String,
    // email: String,
    // fullname: String,
    // bio: String,
    // profilepicurl: String,
    // numfriends: Number,
    // numgroups: Number
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
