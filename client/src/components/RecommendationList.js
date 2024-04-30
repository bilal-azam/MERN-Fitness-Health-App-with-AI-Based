// Code review: Optimize RecommendationList component
import React from 'react';

function RecommendationList({ recommendations, onShare }) {
    return (
        <ul className="recommendation-list">
            {recommendations.map((recommendation, index) => (
                <li key={index} className="recommendation-item">
                    <div className="recommendation-content">
                        <h3>{recommendation.name}</h3>
                        <p>{recommendation.description}</p>
                        <button onClick={() => onShare(recommendation)}>Share</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default RecommendationList;