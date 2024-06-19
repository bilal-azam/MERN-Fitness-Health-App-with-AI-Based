// src/userProfile.js

/**
 * User Profile Management Module with Validation
 * Handles user profile creation, update, and retrieval.
 */

const userProfiles = {};

/**
 * Validates profile data.
 * @param {object} profileData - The profile data.
 * @returns {boolean|string} - True if valid, error message otherwise.
 */
function validateProfileData(profileData) {
    if (!profileData.email || !profileData.age) {
        return 'Email and age are required.';
    }
    if (typeof profileData.email !== 'string' || typeof profileData.age !== 'number') {
        return 'Invalid data types.';
    }
    return true;
}

/**
 * Creates or updates a user profile with validation.
 * @param {string} username - The username of the user.
 * @param {object} profileData - The profile data.
 * @returns {string} - Success message or error.
 */
function saveProfile(username, profileData) {
    if (!userProfiles[username]) {
        return 'User does not exist.';
    }

    const validation = validateProfileData(profileData);
    if (validation !== true) {
        return validation;
    }

    userProfiles[username] = profileData;
    return 'Profile saved successfully.';
}

module.exports = { saveProfile, getProfile };