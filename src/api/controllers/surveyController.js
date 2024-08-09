const db = require('../models');

exports.createSurvey = async (req, res) => {
  try {
      const { title, questions } = req.body;
      const survey = await db.Survey.create({
          userId: req.user.id,
          title,
          questions: JSON.stringify(questions)
      });
      res.json(survey);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.getSurveys = async (req, res) => {
  try {
      const surveys = await db.Survey.findAll({ where: { userId: req.user.id } });
      res.json(surveys);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.submitSurveyResponse = async (req, res) => {
  try {
      const { surveyId, responses } = req.body;
      await db.SurveyResponse.create({
          surveyId,
          userId: req.user.id,
          responses: JSON.stringify(responses)
      });
      res.send('Survey response submitted');
  } catch (error) {
      res.status(500).send('Server error');
  }
};