import React, { useEffect, useState } from 'react';
import useWorkoutRecommendations from '../hooks/useWorkoutRecommendations';

function WorkoutRecommendationsPage() {
    const [userData, setUserData] = useState(null);
    const workouts = useWorkoutRecommendations(userData);

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
            <h2>Workout Recommendations</h2>
            {workouts.length > 0 ? (
                <ul>
                    {workouts.map((workout, index) => (
                        <li key={index}>{workout}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading workout recommendations...</p>
            )}
        </div>
    );
}

export default WorkoutRecommendationsPage;