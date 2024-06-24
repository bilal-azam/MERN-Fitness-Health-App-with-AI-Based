const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

router.post('/profile-picture', uploadController.uploadProfilePicture, (req, res) => {
  res.send('Profile picture uploaded');
});

module.exports = router;