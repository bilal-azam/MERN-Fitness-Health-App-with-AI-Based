const db = require('../models');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/profile_pictures');
  },
  filename: (req, file, cb) => {
      cb(null, req.user.id + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

exports.uploadProfilePicture = upload.single('profilePicture');

exports.updateProfilePicture = async (req, res) => {
  try {
      const filePath = req.file.path;
      await db.User.update({ profilePicture: filePath }, { where: { id: req.user.id } });
      res.json({ profilePicture: filePath });
  } catch (error) {
      res.status(500).send('Server error');
  }
};