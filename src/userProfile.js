// src/userProfile.js

/**
 * User Profile Management Module with Optimized Performance
 * Handles user profile creation, update, and retrieval.
 */

const userProfiles = {};

/**
 * Optimized method for creating or updating a user profile.
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

// Ensure `validateProfileData` is defined and optimized as needed

module.exports = { saveProfile, getProfile };