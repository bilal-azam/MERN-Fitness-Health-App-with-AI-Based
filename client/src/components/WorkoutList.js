import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WorkoutList() {
    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get('/api/workouts', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setWorkouts(res.data);
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    useEffect(() => {
        fetchWorkouts();
    }, []);

    return (
        <div>
            <h3>Your Workouts</h3>
            {workouts.map(workout => (
                <div key={workout._id}>
                    <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
                    {workout.exercises.map((exercise, index) => (
                        <div key={index}>
                            <p>Exercise: {exercise.name}</p>
                            <p>Sets: {exercise.sets}</p>
                            <p>Reps: {exercise.reps}</p>
                            <p>Weight: {exercise.weight} kg</p>
                        </div>
                    ))}
                    <p>Notes: {workout.notes}</p>
                </div>
            ))}
        </div>
    );
}

export default WorkoutList;