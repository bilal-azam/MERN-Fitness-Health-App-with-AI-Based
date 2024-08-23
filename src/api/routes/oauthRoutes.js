const express = require('express');
const router = express.Router();
const oauthController = require('../controllers/oauthController');

router.post('/authenticate', oauthController.authenticate);

module.exports = router;