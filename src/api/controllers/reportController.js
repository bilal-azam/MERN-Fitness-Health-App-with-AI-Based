const db = require('../models');
const { Op } = require('sequelize');
const pdf = require('pdfkit');
const fs = require('fs');
const path = require('path');

exports.generateReport = async (req, res) => {
  try {
      const activities = await db.UserActivity.findAll({
          where: { userId: req.user.id },
          order: [['createdAt', 'DESC']]
      });

      const doc = new pdf();
      doc.pipe(fs.createWriteStream(path.join(__dirname, '../../reports/activity_report.pdf')));
      
      doc.fontSize(25).text('User Activity Report', { align: 'center' });
      activities.forEach(activity => {
          doc.fontSize(12).text(`Date: ${activity.createdAt}
Activity: ${activity.activity}

`);
      });

      doc.end();
      res.send('Report generated successfully');
  } catch (error) {
      res.status(500).send('Server error');
  }
};