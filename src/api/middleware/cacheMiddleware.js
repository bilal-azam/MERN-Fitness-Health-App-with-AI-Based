const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
      return res.json(cachedResponse);
  }

  res.sendResponse = res.send;
  res.send = (body) => {
      cache.set(key, body);
      res.sendResponse(body);
  };

  next();
};