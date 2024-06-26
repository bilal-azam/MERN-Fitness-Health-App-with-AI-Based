const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
});

exports.logError = (err, req, res, next) => {
  logger.error(err.message, { metadata: err });
  res.status(500).send('Something went wrong');
};