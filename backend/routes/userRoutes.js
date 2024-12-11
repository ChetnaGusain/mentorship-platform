const express = require('express');
const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, skills } = req.body;

    // Logic to update user profile in the database (e.g., MongoDB)
    const updatedUser = await User.findByIdAndUpdate(id, { name, role, skills }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
