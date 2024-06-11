import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
      const fetchProfile = async () => {
          try {
              const response = await axios.get('/api/profile');
              setName(response.data.name);
              setEmail(response.data.email);
          } catch (error) {
              console.error('Error fetching profile:', error);
          }
      };

      fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
      e.preventDefault();
      try {
          await axios.put('/api/profile', { name, email });
          alert('Profile updated successfully');
      } catch (error) {
          console.error('Error updating profile:', error);
          alert('Profile update failed');
      }
  };

  return (
      <form onSubmit={handleUpdate}>
          <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <button type="submit">Update Profile</button>
      </form>
  );
};

export default EditProfile;