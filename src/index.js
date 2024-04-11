// Import middleware
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');

// Use middleware
app.use(logger);
app.use(errorHandler);