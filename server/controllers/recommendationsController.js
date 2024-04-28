// Refactor to improve performance by optimizing database queries
const getRecommendations = async (req, res) => {
    try {
        const userId = req.user.id;
        const recommendations = await Recommendation.find({ userId }).lean();

        // Applying performance optimizations
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};