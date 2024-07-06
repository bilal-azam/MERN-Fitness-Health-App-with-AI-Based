import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({ email: true, sms: false });

  useEffect(() => {
      const fetchPreferences = async () => {
          try {
              const response = await axios.get('/api/notifications/preferences');
              setPreferences(response.data);
          } catch (error) {
              console.error('Error fetching preferences:', error);
          }
      };

      fetchPreferences();
  }, []);

  const handleChange = async (e) => {
      const { name, checked } = e.target;
      setPreferences({ ...preferences, [name]: checked });
      try {
          await axios.post('/api/notifications/preferences', { [name]: checked });
      } catch (error) {
          console.error('Error updating preferences:', error);
      }
  };

  return (
      <form>
          <label>
              Email Notifications
              <input type="checkbox" name="email" checked={preferences.email} onChange={handleChange} />
          </label>
          <label>
              SMS Notifications
              <input type="checkbox" name="sms" checked={preferences.sms} onChange={handleChange} />
          </label>
      </form>
  );
};

export default NotificationPreferences;