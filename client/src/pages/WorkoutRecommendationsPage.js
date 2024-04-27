// Integrate feedback loop into WorkoutRecommendationsPage
import useFeedbackLoop from '../hooks/useFeedbackLoop';

const { submitFeedback, submitted } = useFeedbackLoop(workout.id, feedback);

<button onClick={submitFeedback}>
    {submitted ? 'Feedback Submitted' : 'Submit Feedback'}
</button>