const express = require('express');
const router = express.Router();
const localizationController = require('../controllers/localizationController');

router.post('/set-language', localizationController.setLanguage);
router.get('/localized-string', localizationController.getLocalizedString);

module.exports = router;