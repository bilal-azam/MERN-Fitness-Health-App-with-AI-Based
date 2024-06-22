const cacheMiddleware = require('../middleware/cacheMiddleware');

router.get('/weather', cacheMiddleware, externalApiController.getWeather);
router.get('/news', cacheMiddleware, externalApiController.getNews);