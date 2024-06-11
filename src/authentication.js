// src/authentication.js

/**
 * Enhanced User Authentication Module with Roles and Permissions
 * Handles user login, registration, and user roles.
 */

const users = {}; // In-memory store for user data with roles

/**
 * Registers a new user with a role and password hashing.
 * @param {string} username - The username of the new user.
 * @param {string} password - The password of the new user.
 * @param {string} role - The role of the new user (e.g., 'admin', 'user').
 * @returns {string} - Success message or error.
 */
function register(username, password, role) {
    if (users[username]) {
        return 'User already exists.';
    }
    const hashedPassword = hashPassword(password);
    users[username] = { password: hashedPassword, role };
    return 'User registered successfully.';
}

/**
 * Checks the role of the user.
 * @param {string} username - The username of the user.
 * @returns {string} - The role of the user or 'User not found'.
 */
function getRole(username) {
    if (users[username]) {
        return users[username].role;
    }
    return 'User not found';
}

module.exports = { register, authenticate, getRole };