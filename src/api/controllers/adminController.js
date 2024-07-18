const db = require('../models');

exports.getSystemStats = async (req, res) => {
  try {
      const userCount = await db.User.count();
      const activityCount = await db.UserActivity.count();
      const feedbackCount = await db.Feedback.count();
      
      res.json({
          userCount,
          activityCount,
          feedbackCount
      });
  } catch (error) {
      res.status(500).send('Server error');
  }
};