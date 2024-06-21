// src/api/userProfileApi.js

const express = require('express');
const router = express.Router();
const { saveProfile, getProfile } = require('../userProfile');

/**
 * Middleware for validating request data.
 */
function validateProfileRequest(req, res, next) {
    const { profileData } = req.body;
    if (!profileData || !profileData.email || !profileData.age) {
        return res.status(400).send('Email and age are required.');
    }
    next();
}

// Create or update a user profile
router.post('/profile', validateProfileRequest, (req, res) => {
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