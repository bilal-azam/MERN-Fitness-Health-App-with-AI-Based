const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/upload-picture', profileController.uploadProfilePicture, profileController.updateProfilePicture);

module.exports = router;