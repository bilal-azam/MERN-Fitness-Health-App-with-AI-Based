const express = require('express');
const router = express.Router();
const activityHistoryController = require('../controllers/activityHistoryController');

router.get('/', activityHistoryController.getActivityHistory);

module.exports = router;