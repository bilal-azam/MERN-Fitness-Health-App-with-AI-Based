// src/api/userProfileApi.js

const express = require('express');
const router = express.Router();
const { saveProfile, getProfile } = require('../userProfile');

// Create or update a user profile
router.post('/profile', (req, res) => {
    const { username, profileData } = req.body;
    const result = saveProfile(username, profileData);
    res.send(result);
});

// Retrieve a user profile
router.get('/profile/:username', (req, res) => {
    const { username } = req.params;
    const result = getProfile(username);
    res.send(result);
});

module.exports = router;