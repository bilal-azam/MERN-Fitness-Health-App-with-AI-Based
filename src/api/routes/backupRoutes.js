const express = require('express');
const router = express.Router();
const backupController = require('../controllers/backupController');

router.get('/backup', backupController.backupData);
router.post('/restore', backupController.restoreData);

module.exports = router;