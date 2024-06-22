// tests/userProfile.test.js

const { saveProfile, getProfile } = require('../src/userProfile');

describe('User Profile Management', () => {
    test('Create and retrieve user profile with additional fields and validation', () => {
        expect(saveProfile('testUser', { email: 'test@example.com', age: 25, phone: '123-456-7890', address: '123 Main St' })).toBe('Profile saved successfully.');
        expect(getProfile('testUser')).toEqual({ email: 'test@example.com', age: 25, phone: '123-456-7890', address: '123 Main St' });
    });

    test('Invalid profile data handling', () => {
        expect(saveProfile('testUser', { email: '', age: 'invalid' })).toBe('Email and age are required.');
    });

    test('Retrieve profile for non-existing user', () => {
        expect(getProfile('nonExistingUser')).toBe('User not found');
    });
});