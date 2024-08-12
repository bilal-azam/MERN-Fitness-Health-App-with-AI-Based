const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/schedule', emailController.scheduleEmail);

module.exports = router;