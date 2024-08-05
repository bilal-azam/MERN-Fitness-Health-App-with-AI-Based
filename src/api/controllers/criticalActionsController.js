const db = require('../models');

exports.logCriticalAction = async (req, res) => {
  try {
      const { action } = req.body;
      await db.CriticalActionLog.create({
          userId: req.user.id,
          action
      });
      res.send('Critical action logged');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getCriticalActionLogs = async (req, res) => {
  try {
      const logs = await db.CriticalActionLog.findAll({ where: { userId: req.user.id } });
      res.json(logs);
  } catch (error) {
      res.status(500).send('Server error');
  }
};