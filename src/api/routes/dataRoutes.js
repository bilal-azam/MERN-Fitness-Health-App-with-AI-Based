const express = require('express');
const multer = require('multer');
const router = express.Router();
const dataController = require('../controllers/dataController');

const upload = multer();

router.get('/export', dataController.exportData);
router.post('/import', upload.single('file'), dataController.importData);

module.exports = router;