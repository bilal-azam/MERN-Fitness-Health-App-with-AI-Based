import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
      const fetchProfile = async () => {
          try {
              const response = await axios.get('/api/profile');
              setProfile(response.data);
          } catch (error) {
              console.error('Error fetching profile:', error);
          }
      };

      fetchProfile();
  }, []);

  return (
      <div>
          {profile ? (
              <div>
                  <h1>{profile.name}</h1>
                  <p>Email: {profile.email}</p>
                  <p>Role: {profile.role}</p>
              </div>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  );
};

export default UserProfile;