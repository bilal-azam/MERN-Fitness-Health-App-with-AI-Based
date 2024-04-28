// Refactor to enhance scalability by modularizing the code
const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const userProfile = await User.findById(userId).lean();

        // Code modularization and error handling improvements
        if (!userProfile) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(userProfile);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};