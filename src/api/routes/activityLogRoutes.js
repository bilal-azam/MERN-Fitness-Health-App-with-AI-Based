const express = require('express');
const router = express.Router();
const activityLogController = require('../controllers/activityLogController');

router.post('/log', activityLogController.logUserActivity);
router.get('/logs', activityLogController.getUserActivityLogs);

module.exports = router;