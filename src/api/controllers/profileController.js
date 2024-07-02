const db = require('../models');

exports.getProfile = async (req, res) => {
  try {
      const profile = await db.User.findByPk(req.user.id);
      res.json(profile);
  } catch (error) {
      res.status(500).send('Server error');
  }
};