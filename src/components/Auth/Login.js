import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
          await axios.post('/api/login', { email, password });
          alert('Login successful');
      } catch (error) {
          console.error('Error logging in:', error);
          alert('Login failed');
      }
  };

  return (
      <form onSubmit={handleLogin}>
          <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Login</button>
      </form>
  );
};

export default Login;