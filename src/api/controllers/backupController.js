const db = require('../models');
const fs = require('fs');
const path = require('path');

exports.backupData = async (req, res) => {
  try {
      const data = await db.User.findAll();
      const backupFile = path.join(__dirname, '../../backups/user_backup.json');
      fs.writeFileSync(backupFile, JSON.stringify(data));
      
      res.download(backupFile, 'user_backup.json');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.restoreData = async (req, res) => {
  try {
      const backupFile = path.join(__dirname, '../../backups/user_backup.json');
      const data = JSON.parse(fs.readFileSync(backupFile));
      await db.User.bulkCreate(data);
      
      res.send('Data restored');
  } catch (error) {
      res.status(500).send('Server error');
  }
};