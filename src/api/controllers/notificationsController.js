const db = require('../models');

exports.createNotification = async (req, res) => {
  try {
      const { message, type } = req.body;
      await db.Notification.create({
          userId: req.user.id,
          message,
          type
      });
      res.send('Notification created');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getNotifications = async (req, res) => {
  try {
      const notifications = await db.Notification.findAll({ where: { userId: req.user.id } });
      res.json(notifications);
  } catch (error) {
      res.status(500).send('Server error');
  }
};