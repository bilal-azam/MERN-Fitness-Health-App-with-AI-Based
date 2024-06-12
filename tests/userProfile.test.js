// tests/userProfile.test.js

const { saveProfile, getProfile } = require('../src/userProfile');

describe('User Profile Management', () => {
    test('Create and retrieve user profile', () => {
        saveProfile('testUser', { email: 'test@example.com', age: 25 });
        expect(getProfile('testUser')).toEqual({ email: 'test@example.com', age: 25 });
    });

    test('Retrieve profile for non-existing user', () => {
        expect(getProfile('nonExistingUser')).toBe('User not found');
    });
});