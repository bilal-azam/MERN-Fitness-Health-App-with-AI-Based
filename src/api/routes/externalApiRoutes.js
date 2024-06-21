const express = require('express');
const router = express.Router();
const externalApiController = require('../controllers/externalApiController');

router.get('/weather', externalApiController.getWeather);
router.get('/news', externalApiController.getNews);

module.exports = router;