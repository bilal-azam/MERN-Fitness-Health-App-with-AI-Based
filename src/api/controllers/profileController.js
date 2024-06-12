const db = require('../models'); // Assuming you're using Sequelize or similar ORM

exports.getProfile = async (req, res) => {
  try {
      const user = await db.User.findByPk(req.user.id); // Assuming user ID is available in req.user
      if (!user) return res.status(404).send('User not found');
      res.json({ name: user.name, email: user.email });
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.updateProfile = async (req, res) => {
  try {
      const { name, email } = req.body;
      const user = await db.User.findByPk(req.user.id);
      if (!user) return res.status(404).send('User not found');
      user.name = name;
      user.email = email;
      await user.save();
      res.json({ name, email });
  } catch (error) {
      res.status(500).send('Server error');
  }
};