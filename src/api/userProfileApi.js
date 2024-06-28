// src/api/userProfileApi.js

const express = require('express');
const router = express.Router();
const axios = require('axios');
const { saveProfile, getProfile } = require('../userProfile');

// Fetch additional user data from a third-party API
async function enrichUserData(username) {
    try {
        const response = await axios.get(`https://third-party-api.com/user/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching additional user data:', error);
        return null;
    }
}

// Retrieve a user profile with enriched data
router.get('/profile/:username', async (req, res) => {
    const profile = getProfile(req.params.username);
    if (profile === 'User not found') {
        res.status(404).send(profile);
    } else {
        const additionalData = await enrichUserData(req.params.username);
        res.json({ ...profile, additionalData });
    }
});

module.exports = router;