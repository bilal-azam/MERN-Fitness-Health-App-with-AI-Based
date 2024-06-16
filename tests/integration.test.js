// tests/integration.test.js

const { register, authenticate, getRole } = require('../src/authentication');
const { saveProfile, getProfile } = require('../src/userProfile');

describe('Integration Tests', () => {
    test('User authentication and profile management', () => {
        expect(register('testUser', 'password123', 'user')).toBe('User registered successfully.');
        expect(authenticate('testUser', 'password123')).toBe('Authentication successful.');

        saveProfile('testUser', { email: 'test@example.com', age: 25 });
        expect(getProfile('testUser')).toEqual({ email: 'test@example.com', age: 25 });
        expect(getRole('testUser')).toBe('user');
    });
});