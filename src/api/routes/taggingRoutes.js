const express = require('express');
const router = express.Router();
const taggingController = require('../controllers/taggingController');

router.post('/add', taggingController.addTag);
router.get('/tags/:contentId', taggingController.getTags);

module.exports = router;