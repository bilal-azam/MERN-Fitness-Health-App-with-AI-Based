const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/user-analytics', analyticsController.getUserAnalytics);

module.exports = router;