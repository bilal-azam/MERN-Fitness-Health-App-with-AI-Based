const express = require('express');
const router = express.Router();
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/admin', roleMiddleware('admin'), (req, res) => {
  res.send('Admin content');
});

module.exports = router;