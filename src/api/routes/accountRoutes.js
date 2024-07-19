const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/deactivate', accountController.deactivateAccount);
router.post('/reactivate', accountController.reactivateAccount);

module.exports = router;