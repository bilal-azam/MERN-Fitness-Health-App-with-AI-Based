import React, { useEffect, useState } from 'react';
import usePersonalizedWorkouts from '../hooks/usePersonalizedWorkouts';

function PersonalizedWorkoutsPage() {
    const [userData, setUserData] = useState(null);
    const personalizedWorkouts = usePersonalizedWorkouts(userData);

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
            <h2>Personalized Workouts</h2>
            {personalizedWorkouts.length > 0 ? (
                <ul>
                    {personalizedWorkouts.map((workout, index) => (
                        <li key={index}>{workout}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading personalized workouts...</p>
            )}
        </div>
    );
}

export default PersonalizedWorkoutsPage;