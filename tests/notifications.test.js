// tests/notifications.test.js

const { sendNotification, getNotifications } = require('../src/notifications');

describe('Real-Time Notifications', () => {
    test('Send and retrieve notifications', () => {
        sendNotification('New notification');
        expect(getNotifications()).toContain('New notification');
    });
});