// src/api/userProfileApi.js

const express = require('express');
const router = express.Router();
const { saveProfile, getProfile } = require('../userProfile');

/**
 * Middleware for optimizing API performance.
 */
function optimizePerformance(req, res, next) {
    // Implement any performance optimizations here
    next();
}

router.use(optimizePerformance);

// Existing routes...

module.exports = router;