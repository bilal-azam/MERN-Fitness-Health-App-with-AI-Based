const db = require('../models');

exports.createContent = async (req, res) => {
  try {
      const { title, body } = req.body;
      const content = await db.Content.create({
          userId: req.user.id,
          title,
          body
      });
      res.json(content);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getContent = async (req, res) => {
  try {
      const content = await db.Content.findAll({ where: { userId: req.user.id } });
      res.json(content);
  } catch (error) {
      res.status(500).send('Server error');
  }
};