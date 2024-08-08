const db = require('../models');
const path = require('path');
const fs = require('fs');

exports.uploadProfilePicture = async (req, res) => {
  try {
      const { file } = req;
      const filePath = path.join(__dirname, '../../uploads/profile_pictures', file.originalname);
      fs.writeFileSync(filePath, file.buffer);
      
      await db.User.update({ profilePicture: filePath }, { where: { id: req.user.id } });
      res.send('Profile picture updated');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getProfilePicture = async (req, res) => {
  try {
      const user = await db.User.findByPk(req.user.id);
      res.sendFile(user.profilePicture);
  } catch (error) {
      res.status(500).send('Server error');
  }
};