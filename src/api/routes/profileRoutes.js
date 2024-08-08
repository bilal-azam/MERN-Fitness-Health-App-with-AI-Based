const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload-picture', upload.single('profilePicture'), profileController.uploadProfilePicture);
router.get('/picture', profileController.getProfilePicture);

module.exports = router;