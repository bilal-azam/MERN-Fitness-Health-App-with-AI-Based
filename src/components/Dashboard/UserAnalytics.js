import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserAnalytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('/api/analytics');
              setData(response.data);
          } catch (error) {
              console.error('Error fetching analytics:', error);
          }
      };

      fetchData();
  }, []);

  return (
      <div>
          <h1>User Analytics</h1>
          <ul>
              {data.map((item) => (
                  <li key={item.id}>
                      {item.metric}: {item.value}
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default UserAnalytics;