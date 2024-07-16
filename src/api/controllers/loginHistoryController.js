const db = require('../models');

exports.recordLogin = async (req, res) => {
  try {
      await db.LoginHistory.create({
          userId: req.user.id,
          ip: req.ip,
          userAgent: req.headers['user-agent']
      });
      res.send('Login recorded');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getLoginHistory = async (req, res) => {
  try {
      const history = await db.LoginHistory.findAll({ where: { userId: req.user.id } });
      res.json(history);
  } catch (error) {
      res.status(500).send('Server error');
  }
};