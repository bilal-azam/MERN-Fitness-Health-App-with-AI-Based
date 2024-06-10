// src/authentication.js

/**
 * Enhanced User Authentication Module
 * Handles user login, registration, and enhanced security features.
 */

const users = {}; // In-memory store for user data

/**
 * Registers a new user with password hashing.
 * @param {string} username - The username of the new user.
 * @param {string} password - The password of the new user.
 * @returns {string} - Success message or error.
 */
function register(username, password) {
    if (users[username]) {
        return 'User already exists.';
    }
    // Hashing the password for security
    const hashedPassword = hashPassword(password);
    users[username] = hashedPassword;
    return 'User registered successfully.';
}

/**
 * Authenticates a user with password comparison.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {string} - Success message or error.
 */
function authenticate(username, password) {
    const hashedPassword = hashPassword(password);
    if (users[username] === hashedPassword) {
        return 'Authentication successful.';
    }
    return 'Invalid credentials.';
}

/**
 * Hashes the password.
 * @param {string} password - The password to hash.
 * @returns {string} - The hashed password.
 */
function hashPassword(password) {
    // Simple hashing logic for demonstration (use a library like bcrypt in production)
    return password.split('').reverse().join('');
}

module.exports = { register, authenticate };