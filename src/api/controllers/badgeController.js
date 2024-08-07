const db = require('../models');

exports.awardBadge = async (req, res) => {
  try {
      const { badgeName } = req.body;
      await db.Badge.create({
          userId: req.user.id,
          badgeName
      });
      res.send('Badge awarded');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getBadges = async (req, res) => {
  try {
      const badges = await db.Badge.findAll({ where: { userId: req.user.id } });
      res.json(badges);
  } catch (error) {
      res.status(500).send('Server error');
  }
};