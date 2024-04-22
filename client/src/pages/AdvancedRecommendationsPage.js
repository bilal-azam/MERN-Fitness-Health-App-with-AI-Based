import React, { useState, useEffect } from 'react';
import useAdvancedFilters from '../hooks/useAdvancedFilters';
import useRecommendations from '../hooks/useRecommendations';

function AdvancedRecommendationsPage() {
    const [userData, setUserData] = useState(null);
    const recommendations = useRecommendations(userData);
    const [filters, setFilters] = useState({});
    const filteredResults = useAdvancedFilters(recommendations, filters);

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

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    return (
        <div>
            <h2>Advanced Recommendations</h2>
            <div>
                <label>
                    Difficulty:
                    <select name="difficulty" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <label>
                    Duration (minutes):
                    <input name="duration" type="number" onChange={handleFilterChange} />
                </label>
                <label>
                    Type:
                    <select name="type" onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="cardio">Cardio</option>
                        <option value="strength">Strength</option>
                        <option value="flexibility">Flexibility</option>
                    </select>
                </label>
            </div>
            {filteredResults.length > 0 ? (
                <ul>
                    {filteredResults.map((rec, index) => (
                        <li key={index}>{rec.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No recommendations match your filters.</p>
            )}
        </div>
    );
}

export default AdvancedRecommendationsPage;