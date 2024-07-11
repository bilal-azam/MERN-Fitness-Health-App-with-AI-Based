const db = require('../models');

exports.submitFeedback = async (req, res) => {
  try {
      const { feedback } = req.body;
      await db.Feedback.create({ userId: req.user.id, feedback });
      res.status(201).send('Feedback submitted');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
      const feedbacks = await db.Feedback.findAll();
      res.json(feedbacks);
  } catch (error) {
      res.status(500).send('Server error');
  }
};