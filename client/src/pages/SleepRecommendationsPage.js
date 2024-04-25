// UI/UX enhancements for SleepRecommendationsPage
return (
    <div className="sleep-recommendations-page">
        <h2>Sleep Recommendations</h2>
        {sleepPlan.length > 0 ? (
            <ul className="sleep-plan-list">
                {sleepPlan.map((plan, index) => (
                    <li key={index} className="plan-item">
                        <div className="plan-content">
                            <h3>{plan.name}</h3>
                            <p>{plan.description}</p>
                            <button onClick={() => shareRecommendation('platform', plan)}>
                                Share
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Loading sleep recommendations...</p>
        )}
    </div>
);