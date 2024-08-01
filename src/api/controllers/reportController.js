const db = require('../models');

exports.generateActivityReport = async (req, res) => {
  try {
      const activities = await db.UserActivity.findAll({
          where: { userId: req.user.id },
          attributes: [
              'action',
              [db.sequelize.fn('COUNT', db.sequelize.col('action')), 'count']
          ],
          group: ['action']
      });

      res.json(activities);
  } catch (error) {
      res.status(500).send('Server error');
  }
};