// src/api/feedbackApi.js

const express = require('express');
const router = express.Router();

// Placeholder for storing feedback data
const feedbackStore = [];

// Endpoint to handle feedback submissions
router.post('/feedback', (req, res) => {
    const { feedback } = req.body;
    if (!feedback) {
        return res.status(400).send('Feedback is required.');
    }
    feedbackStore.push(feedback);
    res.send('Feedback received. Thank you!');
});

module.exports = router;