const db = require('../models');

exports.logActivity = async (req, res) => {
  try {
      const { activity } = req.body;
      await db.Activity.create({ userId: req.user.id, activity });
      res.status(201).send('Activity logged');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getActivities = async (req, res) => {
  try {
      const activities = await db.Activity.findAll({ where: { userId: req.user.id } });
      res.json(activities);
  } catch (error) {
      res.status(500).send('Server error');
  }
};