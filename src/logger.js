// src/logger.js

/**
 * Simple logging module for the application.
 * Logs messages to the console with timestamps.
 */

function log(message) {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${message}`);
}

module.exports = { log };