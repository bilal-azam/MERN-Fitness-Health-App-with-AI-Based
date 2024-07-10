const db = require('../models');

exports.advancedSearch = async (req, res) => {
  try {
      const { query, filters } = req.body;
      const results = await db.Item.findAll({
          where: {
              ...filters,
              [Op.or]: [
                  { name: { [Op.iLike]: `{query}` } },
                  { description: { [Op.iLike]: `{query}%` } }
              ]
          }
      });
      res.json(results);
  } catch (error) {
      res.status(500).send('Server error');
  }
};