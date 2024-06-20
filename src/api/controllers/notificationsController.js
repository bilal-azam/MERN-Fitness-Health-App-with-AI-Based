const db = require('../models');

exports.getNotifications = async (req, res) => {
  try {
      const notifications = await db.Notification.findAll({ where: { userId: req.user.id } });
      res.json(notifications);
  } catch (error) {
      res.status(500).send('Server error');
  }
};