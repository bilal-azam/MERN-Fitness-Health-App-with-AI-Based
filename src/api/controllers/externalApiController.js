const axios = require('axios');

exports.getExternalData = async (req, res) => {
  try {
      const response = await axios.get('https://api.thirdparty.com/data');
      res.json(response.data);
  } catch (error) {
      res.status(500).send('Failed to fetch external data');
  }
};