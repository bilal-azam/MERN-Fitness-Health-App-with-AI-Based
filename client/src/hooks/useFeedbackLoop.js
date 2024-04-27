import { useState } from 'react';
import axios from 'axios';

const useFeedbackLoop = (recommendationId, feedback) => {
    const [submitted, setSubmitted] = useState(false);

    const submitFeedback = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/feedback', { recommendationId, feedback }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting feedback:', err);
            setSubmitted(false);
        }
    };

    return { submitFeedback, submitted };
};

export default useFeedbackLoop;