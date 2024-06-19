const db = require('../models');

exports.getAnalytics = async (req, res) => {
  try {
      const analytics = await db.Analytics.findAll(); // Example data fetching
      res.json(analytics);
  } catch (error) {
      res.status(500).send('Server error');
  }
};