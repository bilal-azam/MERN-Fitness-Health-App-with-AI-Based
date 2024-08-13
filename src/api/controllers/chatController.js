const db = require('../models');

exports.sendMessage = async (req, res) => {
  try {
      const { recipientId, message } = req.body;
      await db.Chat.create({
          senderId: req.user.id,
          recipientId,
          message
      });
      res.send('Message sent');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getMessages = async (req, res) => {
  try {
      const { recipientId } = req.query;
      const messages = await db.Chat.findAll({
          where: {
              senderId: req.user.id,
              recipientId
          }
      });
      res.json(messages);
  } catch (error) {
      res.status(500).send('Server error');
  }
};