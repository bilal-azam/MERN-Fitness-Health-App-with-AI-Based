const db = require('../models');

exports.getPreferences = async (req, res) => {
  try {
      const preferences = await db.NotificationPreferences.findOne({ where: { userId: req.user.id } });
      res.json(preferences);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.updatePreferences = async (req, res) => {
  try {
      const { email, sms } = req.body;
      await db.NotificationPreferences.upsert({ userId: req.user.id, email, sms });
      res.send('Preferences updated');
  } catch (error) {
      res.status(500).send('Server error');
  }
};