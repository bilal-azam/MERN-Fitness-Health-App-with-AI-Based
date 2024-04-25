// UI/UX enhancements for RecommendationsPage
return (
    <div className="recommendations-page">
        <h2>Recommendations</h2>
        {recommendations ? (
            <ul className="recommendations-list">
                {recommendations.map((rec, index) => (
                    <li key={index} className="recommendation-item">
                        <div className="recommendation-content">
                            <h3>{rec.name}</h3>
                            <p>{rec.description}</p>
                            <button onClick={() => shareRecommendation('platform', rec)}>
                                Share
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Loading recommendations...</p>
        )}
    </div>
);