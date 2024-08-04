const db = require('../models');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Use a secure key in production

exports.createSession = async (req, res) => {
  try {
      const token = jwt.sign({ id: req.user.id }, secretKey, { expiresIn: '1h' });
      res.json({ token });
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.verifySession = async (req, res, next) => {
  try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).send('No token provided');
      
      jwt.verify(token, secretKey, (err, decoded) => {
          if (err) return res.status(401).send('Invalid token');
          req.user = { id: decoded.id };
          next();
      });
  } catch (error) {
      res.status(500).send('Server error');
  }
};