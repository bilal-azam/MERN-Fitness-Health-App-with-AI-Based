const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.get('/preferences', notificationController.getPreferences);
router.post('/preferences', notificationController.updatePreferences);

module.exports = router;