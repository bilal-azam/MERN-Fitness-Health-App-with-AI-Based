const sanitize = require('sanitize-html');

exports.sanitizeInput = (req, res) => {
  const { input } = req.body;
  const sanitized = sanitize(input);
  res.json({ sanitized });
};