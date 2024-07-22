const db = require('../models');
const json2csv = require('json2csv').parse;
const fs = require('fs');
const path = require('path');

exports.exportUserData = async (req, res) => {
  try {
      const users = await db.User.findAll();
      const csv = json2csv(users.map(user => user.toJSON()));

      const filePath = path.join(__dirname, '../../exports/user_data.csv');
      fs.writeFileSync(filePath, csv);
      
      res.download(filePath, 'user_data.csv');
  } catch (error) {
      res.status(500).send('Server error');
  }
};