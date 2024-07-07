const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/generate-2fa', authController.generate2FASecret);
router.post('/verify-2fa', authController.verify2FA);

module.exports = router;