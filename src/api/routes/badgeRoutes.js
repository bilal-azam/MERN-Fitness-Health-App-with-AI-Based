const express = require('express');
const router = express.Router();
const badgeController = require('../controllers/badgeController');

router.post('/award', badgeController.awardBadge);
router.get('/badges', badgeController.getBadges);

module.exports = router;