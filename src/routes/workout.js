const express = require('express');
const auth = require('../middleware/authMiddleware');
const Workout = require('../models/Workout');

const router = express.Router();

// Create new workout
router.post('/', auth, async (req, res) => {
    try {
        const workout = new Workout({ ...req.body, user: req.user._id });
        await workout.save();
        res.status(201).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all workouts for user
router.get('/', auth, async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user._id }).sort({ date: -1 });
        res.json(workouts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get single workout
router.get('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findOne({ _id: req.params.id, user: req.user._id });
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update workout
router.put('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            req.body,
            { new: true }
        );
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete workout
router.delete('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!workout) return res.status(404).json({ error: 'Workout not found' });
        res.json({ message: 'Workout deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;