const express = require('express');
const router = express.Router();
const loginHistoryController = require('../controllers/loginHistoryController');

router.post('/record', loginHistoryController.recordLogin);
router.get('/', loginHistoryController.getLoginHistory);

module.exports = router;