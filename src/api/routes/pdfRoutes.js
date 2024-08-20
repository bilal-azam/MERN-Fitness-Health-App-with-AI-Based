const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');

router.get('/export', pdfController.exportToPDF);

module.exports = router;