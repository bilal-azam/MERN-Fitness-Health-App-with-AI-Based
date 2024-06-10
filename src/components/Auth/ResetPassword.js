import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = async (e) => {
      e.preventDefault();
      try {
          await axios.post('/api/reset-password', { email });
          alert('Password reset email sent');
      } catch (error) {
          console.error('Error sending reset email:', error);
          alert('Error sending reset email');
      }
  };

  return (
      <form onSubmit={handleReset}>
          <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <button type="submit">Reset Password</button>
      </form>
  );
};

export default ResetPassword;