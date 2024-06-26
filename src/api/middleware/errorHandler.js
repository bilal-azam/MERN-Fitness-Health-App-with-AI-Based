const errorController = require('../controllers/errorController');

module.exports = (err, req, res, next) => {
  errorController.logError(err, req, res, next);
};