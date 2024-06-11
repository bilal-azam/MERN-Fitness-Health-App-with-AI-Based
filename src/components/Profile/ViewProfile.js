import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewProfile = () => {
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

  if (!profile) return <div>Loading...</div>;

  return (
      <div>
          <h1>Profile</h1>
          <p>Email: {profile.email}</p>
          <p>Name: {profile.name}</p>
      </div>
  );
};

export default ViewProfile;