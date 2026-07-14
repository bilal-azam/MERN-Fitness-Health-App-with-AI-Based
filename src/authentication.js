// src/authentication.js

const { log } = require('./logger');

/**
 * Enhanced User Authentication Module with Roles and Permissions
 * Handles user login, registration, and user roles.
 */

const users = {};

/**
 * Registers a new user.
 * @param {string} username - The username.
 * @param {string} password - The password.
 * @param {string} role - The role of the user (defaults to 'user').
 * @returns {string} - Status message.
 */
function register(username, password, role = 'user') {
    log(`Registering user: ${username}`);
    if (users[username]) {
        return 'User already exists.';
    }
    users[username] = { password, role };
    return 'User registered successfully.';
}

/**
 * Authenticates a user.
 * @param {string} username - The username.
 * @param {string} password - The password.
 * @returns {string} - Status message.
 */
function authenticate(username, password) {
    log(`Authenticating user: ${username}`);
    if (!users[username] || users[username].password !== password) {
        return 'Invalid credentials.';
    }
    return 'Authentication successful.';
}

/**
 * Gets the role of a user.
 * @param {string} username - The username.
 * @returns {string|null} - The user's role, or null if user does not exist.
 */
function getRole(username) {
    if (!users[username]) {
        return null;
    }
    return users[username].role;
}

module.exports = { register, authenticate, getRole };
