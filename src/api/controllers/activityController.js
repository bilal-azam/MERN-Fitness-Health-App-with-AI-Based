const db = require('../models');

exports.logActivity = async (req, res) => {
  try {
      const { action } = req.body;
      await db.ActivityLog.create({
          userId: req.user.id,
          action,
          timestamp: new Date()
      });
      res.status(201).send('Activity logged');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getActivityLogs = async (req, res) => {
  try {
      const logs = await db.ActivityLog.findAll({ where: { userId: req.user.id } });
      res.json(logs);
  } catch (error) {
      res.status(500).send('Server error');
  }
};