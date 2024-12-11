const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registration Endpoint
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save new user
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
