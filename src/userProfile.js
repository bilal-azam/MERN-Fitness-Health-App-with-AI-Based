// src/userProfile.js

/**
 * User Profile Management Module with Optimized Performance
 * Handles user profile creation, update, and retrieval.
 */

const userProfiles = {};

/**
 * Validates the profile data.
 * @param {object} profileData - The profile data.
 * @returns {boolean|string} - True if valid, or an error message.
 */
function validateProfileData(profileData) {
    if (!profileData || !profileData.email || typeof profileData.age !== 'number') {
        return 'Email and age are required.';
    }
    return true;
}

/**
 * Optimized method for creating or updating a user profile.
 * @param {string} username - The username of the user.
 * @param {object} profileData - The profile data.
 * @returns {string} - Success message or error.
 */
function saveProfile(username, profileData) {
    const validation = validateProfileData(profileData);
    if (validation !== true) {
        return validation;
    }

    userProfiles[username] = profileData;
    return 'Profile saved successfully.';
}

/**
 * Retrieves the user profile.
 * @param {string} username - The username of the user.
 * @returns {object|string} - The user profile data or error message if not found.
 */
function getProfile(username) {
    if (!userProfiles[username]) {
        return 'User not found';
    }
    return userProfiles[username];
}

module.exports = { saveProfile, getProfile };
