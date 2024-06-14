const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const roles = require('../middleware/roles');

router.post('/log', activityController.logActivity);
router.get('/logs', roles('admin', 'user'), activityController.getActivityLogs);

module.exports = router;