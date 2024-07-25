const db = require('../models');

exports.updateNotificationPreferences = async (req, res) => {
  try {
      const { preferences } = req.body;
      await db.User.update({ notificationPreferences: preferences }, { where: { id: req.user.id } });
      res.send('Notification preferences updated');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getNotificationPreferences = async (req, res) => {
  try {
      const user = await db.User.findByPk(req.user.id);
      res.json(user.notificationPreferences);
  } catch (error) {
      res.status(500).send('Server error');
  }
};