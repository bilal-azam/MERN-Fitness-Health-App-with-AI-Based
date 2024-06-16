const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');
const roles = require('../middleware/roles');

router.get('/export-logs', roles('admin'), exportController.exportActivityLogs);

module.exports = router;