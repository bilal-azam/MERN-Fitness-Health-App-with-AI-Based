const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/activity-report', reportController.generateActivityReport);

module.exports = router;