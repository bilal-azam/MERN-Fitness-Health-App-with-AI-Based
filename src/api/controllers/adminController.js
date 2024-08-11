const db = require('../models');

exports.getUserList = async (req, res) => {
  try {
      const users = await db.User.findAll();
      res.json(users);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.deleteUser = async (req, res) => {
  try {
      const { userId } = req.params;
      await db.User.destroy({ where: { id: userId } });
      res.send('User deleted');
  } catch (error) {
      res.status(500).send('Server error');
  }
};