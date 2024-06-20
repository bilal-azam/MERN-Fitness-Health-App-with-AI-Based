import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
      const fetchNotifications = async () => {
          try {
              const response = await axios.get('/api/notifications');
              setNotifications(response.data);
          } catch (error) {
              console.error('Error fetching notifications:', error);
          }
      };

      fetchNotifications();
  }, []);

  return (
      <div>
          <h1>Notifications</h1>
          <ul>
              {notifications.map((notif) => (
                  <li key={notif.id}>{notif.message}</li>
              ))}
          </ul>
      </div>
  );
};

export default Notifications;