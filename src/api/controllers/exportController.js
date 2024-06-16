const db = require('../models');
const { Parser } = require('json2csv');

exports.exportActivityLogs = async (req, res) => {
  try {
      const logs = await db.ActivityLog.findAll({ where: { userId: req.user.id } });
      const parser = new Parser();
      const csv = parser.parse(logs.map(log => ({
          id: log.id,
          action: log.action,
          timestamp: log.timestamp
      })));
      res.header('Content-Type', 'text/csv');
      res.attachment('activity_logs.csv');
      res.send(csv);
  } catch (error) {
      res.status(500).send('Server error');
  }
};