import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
      try {
          await axios.post('/api/logout');
          alert('Logout successful');
      } catch (error) {
          console.error('Error logging out:', error);
          alert('Logout failed');
      }
  };

  return (
      <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;