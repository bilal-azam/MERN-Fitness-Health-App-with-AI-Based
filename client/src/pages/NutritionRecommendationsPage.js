import React, { useEffect, useState } from 'react';
import useNutritionRecommendations from '../hooks/useNutritionRecommendations';

function NutritionRecommendationsPage() {
    const [userData, setUserData] = useState(null);
    const nutritionPlan = useNutritionRecommendations(userData);

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
            <h2>Nutrition Recommendations</h2>
            {nutritionPlan.length > 0 ? (
                <ul>
                    {nutritionPlan.map((meal, index) => (
                        <li key={index}>{meal}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading nutrition recommendations...</p>
            )}
        </div>
    );
}

export default NutritionRecommendationsPage;