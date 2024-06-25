const db = require('../models');

exports.submitFeedback = async (req, res) => {
  try {
      const { feedback, rating } = req.body;
      await db.Feedback.create({
          userId: req.user.id,
          feedback,
          rating
      });
      res.status(201).send('Feedback submitted');
  } catch (error) {
      res.status(500).send('Server error');
  }
};