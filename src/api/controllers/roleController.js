const db = require('../models');

exports.getRoles = async (req, res) => {
  try {
      const roles = await db.Role.findAll();
      res.json(roles);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.createRole = async (req, res) => {
  try {
      const { name, permissions } = req.body;
      const role = await db.Role.create({ name, permissions });
      res.status(201).json(role);
  } catch (error) {
      res.status(500).send('Server error');
  }
};