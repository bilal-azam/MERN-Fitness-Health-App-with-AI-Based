import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
      const fetchLogs = async () => {
          try {
              const response = await axios.get('/api/logs');
              setLogs(response.data);
          } catch (error) {
              console.error('Error fetching logs:', error);
          }
      };

      fetchLogs();
  }, []);

  return (
      <div>
          <h1>Activity Logs</h1>
          <ul>
              {logs.map(log => (
                  <li key={log.id}>{log.action} at {new Date(log.timestamp).toLocaleString()}</li>
              ))}
          </ul>
      </div>
  );
};

export default ActivityLogs;