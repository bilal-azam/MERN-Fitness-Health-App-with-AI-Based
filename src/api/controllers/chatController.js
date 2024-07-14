const db = require('../models');
const { Op } = require('sequelize');
const io = require('../socket');

exports.sendMessage = async (req, res) => {
  try {
      const { recipientId, message } = req.body;
      const chatMessage = await db.ChatMessage.create({
          senderId: req.user.id,
          recipientId,
          message
      });
      io.getIO().emit('chat', {
          action: 'message',
          message: chatMessage
      });
      res.status(201).json(chatMessage);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getMessages = async (req, res) => {
  try {
      const { recipientId } = req.query;
      const messages = await db.ChatMessage.findAll({
          where: {
              [Op.or]: [
                  { senderId: req.user.id, recipientId },
                  { senderId: recipientId, recipientId: req.user.id }
              ]
          },
          order: [['createdAt', 'ASC']]
      });
      res.json(messages);
  } catch (error) {
      res.status(500).send('Server error');
  }
};