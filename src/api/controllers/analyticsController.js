const db = require('../models');

exports.getUserAnalytics = async (req, res) => {
  try {
      const activities = await db.UserActivity.findAll({
          where: { userId: req.user.id },
          attributes: [
              [db.sequelize.fn('COUNT', db.sequelize.col('activity')), 'activityCount']
          ],
          group: ['activity']
      });

      res.json(activities);
  } catch (error) {
      res.status(500).send('Server error');
  }
};