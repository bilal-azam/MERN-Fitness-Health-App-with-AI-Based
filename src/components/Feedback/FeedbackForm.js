import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await axios.post('/api/feedback', { feedback, rating });
          alert('Feedback submitted');
      } catch (error) {
          console.error('Error submitting feedback:', error);
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <label>
              Feedback:
              <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
          </label>
          <label>
              Rating:
              <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
          </label>
          <button type="submit">Submit Feedback</button>
      </form>
  );
};

export default FeedbackForm;