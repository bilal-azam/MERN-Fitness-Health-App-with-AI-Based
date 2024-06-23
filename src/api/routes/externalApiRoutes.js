const rateLimiter = require('../middleware/rateLimiter');

router.use(rateLimiter);