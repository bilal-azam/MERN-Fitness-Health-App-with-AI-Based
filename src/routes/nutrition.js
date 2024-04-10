const express = require('express');
const auth = require('../middleware/authMiddleware');
const Nutrition = require('../models/Nutrition');

const router = express.Router();

// Create new nutrition entry
router.post('/', auth, async (req, res) => {
    try {
        const nutrition = new Nutrition({ ...req.body, user: req.user._id });
        await nutrition.save();
        res.status(201).json(nutrition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all nutrition entries for user
router.get('/', auth, async (req, res) => {
    try {
        const nutritions = await Nutrition.find({ user: req.user._id }).sort({ date: -1 });
        res.json(nutritions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get single nutrition entry
router.get('/:id', auth, async (req, res) => {
    try {
        const nutrition = await Nutrition.findOne({ _id: req.params.id, user: req.user._id });
        if (!nutrition) return res.status(404).json({ error: 'Nutrition entry not found' });
        res.json(nutrition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update nutrition entry
router.put('/:id', auth, async (req, res) => {
    try {
        const nutrition = await Nutrition.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            req.body,
            { new: true }
        );
        if (!nutrition) return res.status(404).json({ error: 'Nutrition entry not found' });
        res.json(nutrition);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete nutrition entry
router.delete('/:id', auth, async (req, res) => {
    try {
        const nutrition = await Nutrition.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!nutrition) return res.status(404).json({ error: 'Nutrition entry not found' });
        res.json({ message: 'Nutrition entry deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;