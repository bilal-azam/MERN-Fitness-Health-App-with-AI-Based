const express = require('express');
const router = express.Router();
const preferencesController = require('../controllers/preferencesController');

router.post('/update', preferencesController.updatePreferences);
router.get('/', preferencesController.getPreferences);

module.exports = router;