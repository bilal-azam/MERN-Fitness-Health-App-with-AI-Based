const db = require('../models');
const fs = require('fs');
const path = require('path');

exports.exportData = async (req, res) => {
  try {
      const data = await db.Item.findAll();
      const filePath = path.join(__dirname, '../../data/export.json');
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.download(filePath);
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.importData = async (req, res) => {
  try {
      const data = req.file.buffer.toString('utf8');
      const parsedData = JSON.parse(data);
      await db.Item.bulkCreate(parsedData);
      res.send('Data imported successfully');
  } catch (error) {
      res.status(500).send('Server error');
  }
};