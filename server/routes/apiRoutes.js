// Updated API routes with security middleware
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Routes requiring authentication
router.get('/user/profile', authenticateToken, (req, res) => {
    // Profile route handler
});

router.post('/feedback', authenticateToken, (req, res) => {
    // Feedback route handler
});

module.exports = router;