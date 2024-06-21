const axios = require('axios');

exports.getWeather = async (req, res) => {
  try {
      const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
          params: { key: 'YOUR_API_KEY', q: 'London' }
      });
      res.json(response.data);
  } catch (error) {
      res.status(500).send('Error fetching weather data');
  }
};

exports.getNews = async (req, res) => {
  try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: { apiKey: 'YOUR_API_KEY', country: 'us' }
      });
      res.json(response.data);
  } catch (error) {
      res.status(500).send('Error fetching news data');
  }
};