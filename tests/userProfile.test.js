// tests/userProfile.test.js

const { saveProfile, getProfile } = require('../src/userProfile');

describe('User Profile Management', () => {
    test('Create and retrieve user profile with additional fields', () => {
        saveProfile('testUser', { email: 'test@example.com', age: 25, phone: '123-456-7890', address: '123 Main St' });
        expect(getProfile('testUser')).toEqual({ email: 'test@example.com', age: 25, phone: '123-456-7890', address: '123 Main St' });
    });

    test('Retrieve profile for non-existing user', () => {
        expect(getProfile('nonExistingUser')).toBe('User not found');
    });
});