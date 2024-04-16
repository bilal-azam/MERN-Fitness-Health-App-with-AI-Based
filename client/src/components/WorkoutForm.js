import React, { useState } from 'react';
import axios from 'axios';

function WorkoutForm({ onWorkoutAdded }) {
    const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);
    const [notes, setNotes] = useState('');

    const handleExerciseChange = (index, e) => {
        const newExercises = [...exercises];
        newExercises[index][e.target.name] = e.target.value;
        setExercises(newExercises);
    };

    const addExercise = () => {
        setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/workouts', { exercises, notes }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            onWorkoutAdded();
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Log Workout</h3>
            {exercises.map((exercise, index) => (
                <div key={index}>
                    <input name="name" placeholder="Exercise Name" onChange={(e) => handleExerciseChange(index, e)} required />
                    <input name="sets" type="number" placeholder="Sets" onChange={(e) => handleExerciseChange(index, e)} required />
                    <input name="reps" type="number" placeholder="Reps" onChange={(e) => handleExerciseChange(index, e)} required />
                    <input name="weight" type="number" placeholder="Weight (kg)" onChange={(e) => handleExerciseChange(index, e)} />
                </div>
            ))}
            <button type="button" onClick={addExercise}>Add Exercise</button>
            <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
            <button type="submit">Save Workout</button>
        </form>
    );
}

export default WorkoutForm;