import React, { useEffect, useState } from 'react';
import useSleepRecommendations from '../hooks/useSleepRecommendations';

function SleepRecommendationsPage() {
    const [userData, setUserData] = useState(null);
    const sleepPlan = useSleepRecommendations(userData);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUserData(res.data);
            } catch (err) {
                console.error(err.response.data.error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h2>Sleep Recommendations</h2>
            {sleepPlan.length > 0 ? (
                <ul>
                    {sleepPlan.map((plan, index) => (
                        <li key={index}>{plan}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading sleep recommendations...</p>
            )}
        </div>
    );
}

export default SleepRecommendationsPage;