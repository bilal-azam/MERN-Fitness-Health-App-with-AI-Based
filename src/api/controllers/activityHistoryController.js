const db = require('../models');

exports.getActivityHistory = async (req, res) => {
  try {
      const activities = await db.ActivityHistory.findAll({ where: { userId: req.user.id } });
      res.json(activities);
  } catch (error) {
      res.status(500).send('Server error');
  }
};