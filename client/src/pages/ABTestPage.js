import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ABTestPage() {
    const [testGroup, setTestGroup] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchABTestResults = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('/api/ab-test', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTestGroup(res.data.testGroup);
                setRecommendations(res.data.recommendations);
            } catch (err) {
                console.error('Error fetching A/B test results:', err);
            }
        };

        fetchABTestResults();
    }, []);

    return (
        <div>
            <h2>A/B Test Results</h2>
            <p>You are in group: {testGroup}</p>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
}

export default ABTestPage;