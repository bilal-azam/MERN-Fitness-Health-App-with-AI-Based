const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.post('/create', surveyController.createSurvey);
router.get('/', surveyController.getSurveys);
router.post('/submit-response', surveyController.submitSurveyResponse);

module.exports = router;