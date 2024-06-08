import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
      e.preventDefault();
      try {
          await axios.post('/api/register', { email, password });
          alert('Registration successful');
      } catch (error) {
          console.error('Error registering:', error);
          alert('Registration failed');
      }
  };

  return (
      <form onSubmit={handleRegister}>
          <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Register</button>
      </form>
  );
};

export default Register;