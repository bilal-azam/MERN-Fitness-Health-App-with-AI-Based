const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');

router.get('/export-users', exportController.exportUserData);

module.exports = router;