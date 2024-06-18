// src/userProfile.js

/**
 * User Profile Management Module with Additional Fields
 * Handles user profile creation, update, and retrieval.
 */

const userProfiles = {};

/**
 * Creates or updates a user profile with additional fields.
 * @param {string} username - The username of the user.
 * @param {object} profileData - The profile data (e.g., { email: 'example@example.com', age: 30, phone: '123-456-7890', address: '123 Main St' }).
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