const express = require('express');
const router = express.Router();
const roles = require('../middleware/roles');
const adminController = require('../controllers/adminController');

router.get('/admin-data', roles('admin'), adminController.getAdminData);

module.exports = router;