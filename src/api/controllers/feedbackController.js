const db = require('../models');

exports.submitFeedback = async (req, res) => {
  try {
      const { feedback } = req.body;
      await db.Feedback.create({
          userId: req.user.id,
          feedback
      });
      res.send('Feedback submitted');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getFeedback = async (req, res) => {
  try {
      const feedback = await db.Feedback.findAll({ where: { userId: req.user.id } });
      res.json(feedback);
  } catch (error) {
      res.status(500).send('Server error');
  }
};