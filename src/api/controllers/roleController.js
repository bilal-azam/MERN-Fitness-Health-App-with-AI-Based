const db = require('../models');

exports.assignRole = async (req, res) => {
  try {
      const { role } = req.body;
      await db.User.update({ role }, { where: { id: req.user.id } });
      res.send('Role assigned');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getRoles = async (req, res) => {
  try {
      const roles = await db.User.findAll({ attributes: ['id', 'role'] });
      res.json(roles);
  } catch (error) {
      res.status(500).send('Server error');
  }
};