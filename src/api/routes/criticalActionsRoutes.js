const express = require('express');
const router = express.Router();
const criticalActionsController = require('../controllers/criticalActionsController');

router.post('/log', criticalActionsController.logCriticalAction);
router.get('/logs', criticalActionsController.getCriticalActionLogs);

module.exports = router;