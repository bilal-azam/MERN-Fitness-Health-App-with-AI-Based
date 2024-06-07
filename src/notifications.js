// src/notifications.js

/**
 * Real-Time Notifications Module
 * Handles real-time notifications for users.
 */

const notifications = [];

/**
 * Sends a notification to users.
 * @param {string} message - The notification message.
 */
function sendNotification(message) {
    notifications.push(message);
    // Logic to send notifications in real-time (e.g., WebSocket) goes here.
}

/**
 * Retrieves all notifications.
 * @returns {Array<string>} - Array of notifications.
 */
function getNotifications() {
    return notifications;
}

module.exports = { sendNotification, getNotifications };