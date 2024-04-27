// Integrate feedback loop into RecommendationsPage
import useFeedbackLoop from '../hooks/useFeedbackLoop';

const { submitFeedback, submitted } = useFeedbackLoop(recommendation.id, feedback);

<button onClick={submitFeedback}>
    {submitted ? 'Feedback Submitted' : 'Submit Feedback'}
</button>