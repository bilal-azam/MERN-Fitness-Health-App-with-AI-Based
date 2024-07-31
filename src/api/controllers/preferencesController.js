const db = require('../models');

exports.updatePreferences = async (req, res) => {
  try {
      const { preferences } = req.body;
      await db.User.update({ preferences }, { where: { id: req.user.id } });
      res.send('Preferences updated');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getPreferences = async (req, res) => {
  try {
      const user = await db.User.findByPk(req.user.id);
      res.json(user.preferences);
  } catch (error) {
      res.status(500).send('Server error');
  }
};