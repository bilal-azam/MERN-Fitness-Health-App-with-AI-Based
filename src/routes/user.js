const express = require('express');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Get user profile
router.get('/profile', auth, async (req, res) => {
    res.json(req.user);
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        updates.forEach(update => req.user[update] = req.body[update]);
        await req.user.save();
        res.json(req.user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;