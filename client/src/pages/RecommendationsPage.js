import React, { useEffect, useState } from 'react';
import useRecommendations from '../hooks/useRecommendations';

function RecommendationsPage() {
    const [userData, setUserData] = useState(null);
    const recommendations = useRecommendations(userData);

    useEffect(() => {
        // Fetch user data from API
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
            <h2>Recommendations</h2>
            {recommendations ? (
                <ul>
                    {recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading recommendations...</p>
            )}
        </div>
    );
}

export default RecommendationsPage;