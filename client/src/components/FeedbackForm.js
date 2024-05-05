// FeedbackForm component - Integrated user feedback and UI improvements
import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/feedback', { feedback }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSuccessMessage('Feedback submitted successfully');
            setFeedback('');
        } catch (err) {
            setErrorMessage('Error submitting feedback');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Feedback:
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            </label>
            <button type="submit">Submit Feedback</button>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    );
}

export default FeedbackForm;