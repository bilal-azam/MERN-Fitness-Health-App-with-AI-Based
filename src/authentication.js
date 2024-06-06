// src/authentication.js

/**
 * User Authentication Module
 * Handles user login, registration, and authentication.
 */

const users = {}; // In-memory store for user data

/**
 * Registers a new user.
 * @param {string} username - The username of the new user.
 * @param {string} password - The password of the new user.
 * @returns {string} - Success message or error.
 */
function register(username, password) {
    if (users[username]) {
        return 'User already exists.';
    }
    users[username] = password;
    return 'User registered successfully.';
}

/**
 * Authenticates a user.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {string} - Success message or error.
 */
function authenticate(username, password) {
    if (users[username] === password) {
        return 'Authentication successful.';
    }
    return 'Invalid credentials.';
}

module.exports = { register, authenticate };