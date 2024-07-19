const db = require('../models');

exports.deactivateAccount = async (req, res) => {
  try {
      await db.User.update({ active: false }, { where: { id: req.user.id } });
      res.send('Account deactivated');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.reactivateAccount = async (req, res) => {
  try {
      await db.User.update({ active: true }, { where: { id: req.user.id } });
      res.send('Account reactivated');
  } catch (error) {
      res.status(500).send('Server error');
  }
};