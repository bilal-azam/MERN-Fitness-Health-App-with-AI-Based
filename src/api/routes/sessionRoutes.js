const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

router.post('/create', sessionController.createSession);

module.exports = router;