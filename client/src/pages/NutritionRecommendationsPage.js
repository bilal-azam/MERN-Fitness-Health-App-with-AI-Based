// UI/UX enhancements for NutritionRecommendationsPage
return (
    <div className="nutrition-recommendations-page">
        <h2>Nutrition Recommendations</h2>
        {nutritionPlan.length > 0 ? (
            <ul className="nutrition-plan-list">
                {nutritionPlan.map((meal, index) => (
                    <li key={index} className="meal-item">
                        <div className="meal-content">
                            <h3>{meal.name}</h3>
                            <p>{meal.description}</p>
                            <button onClick={() => shareRecommendation('platform', meal)}>
                                Share
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Loading nutrition recommendations...</p>
        )}
    </div>
);