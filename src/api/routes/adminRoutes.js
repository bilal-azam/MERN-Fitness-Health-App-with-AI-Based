const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/users', adminController.getUserList);
router.delete('/user/:userId', adminController.deleteUser);

module.exports = router;