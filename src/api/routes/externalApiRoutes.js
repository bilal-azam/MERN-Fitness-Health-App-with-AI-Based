const express = require('express');
const router = express.Router();
const externalApiController = require('../controllers/externalApiController');

router.get('/data', externalApiController.getExternalData);

module.exports = router;