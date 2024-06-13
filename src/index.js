// src/index.js

/**
 * Main application file.
 * Integrates user profile management and authentication modules.
 */

const { register, authenticate, getRole } = require('./authentication');
const { saveProfile, getProfile } = require('./userProfile');

// Example usage
console.log(register('testUser', 'password123', 'user')); // Register user
console.log(authenticate('testUser', 'password123')); // Authenticate user

saveProfile('testUser', { email: 'test@example.com', age: 25 }); // Save profile
console.log(getProfile('testUser')); // Retrieve profile

console.log(getRole('testUser')); // Get user role