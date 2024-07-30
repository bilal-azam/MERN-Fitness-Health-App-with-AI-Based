const db = require('../models');

exports.addTag = async (req, res) => {
  try {
      const { contentId, tag } = req.body;
      await db.Tag.create({
          contentId,
          tag
      });
      res.send('Tag added');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getTags = async (req, res) => {
  try {
      const tags = await db.Tag.findAll({ where: { contentId: req.params.contentId } });
      res.json(tags);
  } catch (error) {
      res.status(500).send('Server error');
  }
};