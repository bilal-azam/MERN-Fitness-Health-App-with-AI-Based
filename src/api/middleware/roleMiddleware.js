const db = require('../models');

module.exports = (requiredRole) => async (req, res, next) => {
  try {
      const userRole = await db.UserRole.findOne({ where: { userId: req.user.id } });
      if (userRole && userRole.role === requiredRole) {
          next();
      } else {
          res.status(403).send('Forbidden');
      }
  } catch (error) {
      res.status(500).send('Server error');
  }
};