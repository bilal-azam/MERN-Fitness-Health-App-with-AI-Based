// Add route for A/B testing
const abTestingController = require('../controllers/abTestingController');
router.get('/ab-test', authenticateToken, abTestingController.runABTest);