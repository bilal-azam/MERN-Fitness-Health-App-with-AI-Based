const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/update-preferences', notificationController.updateNotificationPreferences);
router.get('/preferences', notificationController.getNotificationPreferences);

module.exports = router;