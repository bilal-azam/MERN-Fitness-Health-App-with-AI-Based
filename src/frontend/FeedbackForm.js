// src/frontend/FeedbackForm.js

import React, { useState } from 'react';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ feedback })
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text); });
            }
            setSuccessMessage('Feedback submitted successfully.');
            setFeedback('');
            setError('');
        })
        .catch(err => setError(err.message));
    };

    return (
        <div>
            <h3>Submit Feedback</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <textarea 
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)} 
                placeholder="Your feedback here..." 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default FeedbackForm;