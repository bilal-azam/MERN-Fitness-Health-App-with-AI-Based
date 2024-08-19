const axios = require('axios');

exports.getLocation = async (req, res) => {
  const { address } = req.query;
  const apiKey = 'your_google_maps_api_key';
  try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);
      res.json(response.data);
  } catch (error) {
      res.status(500).send('Failed to fetch location');
  }
};