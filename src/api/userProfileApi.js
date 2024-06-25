// src/api/userProfileApi.js

const express = require('express');
const rateLimit = require('express-rate-limit');
const sanitizer = require('sanitizer');
const router = express.Router();
const { saveProfile, getProfile } = require('../userProfile');

// Rate limiter middleware to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later."
});

router.use(limiter);

/**
 * Middleware for sanitizing request data.
 */
function sanitizeRequest(req, res, next) {
    req.body.profileData.email = sanitizer.sanitize(req.body.profileData.email);
    req.body.profileData.age = parseInt(sanitizer.sanitize(req.body.profileData.age), 10);
    next();
}

// Create or update a user profile
router.post('/profile', sanitizeRequest, (req, res) => {
    const { username, profileData } = req.body;
    const result = saveProfile(username, profileData);
    if (result === 'Profile saved successfully.') {
        res.send(result);
    } else {
        res.status(400).send(result);
    }
});

// Retrieve a user profile
router.get('/profile/:username', (req, res) => {
    const profile = getProfile(req.params.username);
    if (profile === 'User not found') {
        res.status(404).send(profile);
    } else {
        res.json(profile);
    }
});

module.exports = router;