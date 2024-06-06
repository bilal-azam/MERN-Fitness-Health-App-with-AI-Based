// tests/authentication.test.js

const { register, authenticate } = require('../src/authentication');

describe('User Authentication', () => {
    test('Register a new user', () => {
        expect(register('testUser', 'password123')).toBe('User registered successfully.');
        expect(register('testUser', 'password123')).toBe('User already exists.');
    });

    test('Authenticate a user', () => {
        expect(authenticate('testUser', 'password123')).toBe('Authentication successful.');
        expect(authenticate('testUser', 'wrongPassword')).toBe('Invalid credentials.');
    });
});