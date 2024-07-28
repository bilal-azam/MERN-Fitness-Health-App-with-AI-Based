const db = require('../models');

exports.logUserActivity = async (req, res) => {
  try {
      const { action } = req.body;
      await db.UserActivity.create({
          userId: req.user.id,
          action
      });
      res.send('Activity logged');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getUserActivityLogs = async (req, res) => {
  try {
      const logs = await db.UserActivity.findAll({ where: { userId: req.user.id } });
      res.json(logs);
  } catch (error) {
      res.status(500).send('Server error');
  }
};