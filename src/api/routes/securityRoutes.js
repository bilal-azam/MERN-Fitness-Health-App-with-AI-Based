const express = require('express');
const router = express.Router();
const securityController = require('../controllers/securityController');

router.post('/sanitize', securityController.sanitizeInput);

module.exports = router;