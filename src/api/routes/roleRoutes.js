const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.post('/assign', roleController.assignRole);
router.get('/roles', roleController.getRoles);

module.exports = router;