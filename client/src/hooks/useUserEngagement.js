import { useEffect } from 'react';
import axios from 'axios';

const useUserEngagement = (eventType, eventData) => {
    useEffect(() => {
        const logEngagement = async () => {
            try {
                const token = localStorage.getItem('token');
                await axios.post('/api/engagement', { eventType, eventData }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            } catch (err) {
                console.error('Error logging engagement:', err);
            }
        };

        logEngagement();
    }, [eventType, eventData]);
};

export default useUserEngagement;