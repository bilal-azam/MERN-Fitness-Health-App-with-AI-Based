// UI/UX enhancements for WorkoutRecommendationsPage
return (
    <div className="workout-recommendations-page">
        <h2>Workout Recommendations</h2>
        {workouts.length > 0 ? (
            <ul className="workouts-list">
                {workouts.map((workout, index) => (
                    <li key={index} className="workout-item">
                        <div className="workout-content">
                            <h3>{workout.name}</h3>
                            <p>{workout.description}</p>
                            <button onClick={() => shareRecommendation('platform', workout)}>
                                Share
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Loading workouts...</p>
        )}
    </div>
);