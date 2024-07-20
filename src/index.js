const rateLimiter = require('./middleware/rateLimiter');

// Use rate limiter middleware
app.use(rateLimiter);