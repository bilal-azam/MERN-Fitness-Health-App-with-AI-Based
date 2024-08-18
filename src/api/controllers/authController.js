const jwt = require('jsonwebtoken');
const db = require('../models');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await db.User.findOne({ where: { email } });

  if (user && user.password === password) {
      const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
  } else {
      res.status(401).send('Invalid credentials');
  }
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-auth-token'];
  if (!token) return res.status(403).send('No token provided');

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
      if (err) return res.status(500).send('Failed to authenticate token');
      req.userId = decoded.id;
      next();
  });
};