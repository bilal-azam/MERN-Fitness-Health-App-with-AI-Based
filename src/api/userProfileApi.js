// src/api/userProfileApi.js

const express = require('express');
const router = express.Router();
const axios = require('axios');
const { saveProfile, getProfile } = require('../userProfile');

// Enhanced function for fetching additional user data with improved error handling
async function enrichUserData(username) {
    try {
        const response = await axios.get(`https://third-party-api.com/user/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching additional user data:', error);
        return { error: 'Failed to fetch additional user data' }; // Return error data
    }
}

// Retrieve a user profile with enriched data and improved error handling
router.get('/profile/:username', async (req, res) => {
    const profile = getProfile(req.params.username);
    if (profile === 'User not found') {
        res.status(404).send(profile);
    } else {
        const additionalData = await enrichUserData(req.params.username);
        if (additionalData.error) {
            res.status(500).json({ ...profile, additionalData });
        } else {
            res.json({ ...profile, additionalData });
        }
    }
});

module.exports = router;