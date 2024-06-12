// src/userProfile.js

/**
 * User Profile Management Module
 * Handles user profile creation, update, and retrieval.
 */

const userProfiles = {}; // In-memory store for user profiles

/**
 * Creates or updates a user profile.
 * @param {string} username - The username of the user.
 * @param {object} profileData - The profile data (e.g., { email: 'example@example.com', age: 30 }).
 * @returns {string} - Success message.
 */
function saveProfile(username, profileData) {
    if (!userProfiles[username]) {
        return 'User does not exist.';
    }
    userProfiles[username] = profileData;
    return 'Profile saved successfully.';
}

/**
 * Retrieves a user profile.
 * @param {string} username - The username of the user.
 * @returns {object|string} - The profile data or 'User not found'.
 */
function getProfile(username) {
    if (userProfiles[username]) {
        return userProfiles[username];
    }
    return 'User not found';
}

module.exports = { saveProfile, getProfile };