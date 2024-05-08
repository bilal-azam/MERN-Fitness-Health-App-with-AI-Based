// Updated RecommendationList component with enhanced UX features
import React from 'react';

function RecommendationList({ recommendations, onShare }) {
    return (
        <ul className="recommendation-list">
            {recommendations.length === 0 ? (
                <p>No recommendations available</p>
            ) : (
                recommendations.map((recommendation, index) => (
                    <li key={index} className="recommendation-item">
                        <div className="recommendation-content">
                            <h3>{recommendation.name}</h3>
                            <p>{recommendation.description}</p>
                            <button onClick={() => onShare(recommendation)}>Share</button>
                        </div>
                    </li>
                ))
            )}
        </ul>
    );
}

export default RecommendationList;