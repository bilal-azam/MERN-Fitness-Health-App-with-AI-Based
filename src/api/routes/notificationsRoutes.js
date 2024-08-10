const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController');

router.post('/create', notificationsController.createNotification);
router.get('/', notificationsController.getNotifications);

module.exports = router;