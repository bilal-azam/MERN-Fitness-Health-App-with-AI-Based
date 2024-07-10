const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.post('/advanced-search', searchController.advancedSearch);

module.exports = router;