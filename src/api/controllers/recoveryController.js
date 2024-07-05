const db = require('../models');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.requestPasswordReset = async (req, res) => {
  try {
      const { email } = req.body;
      const user = await db.User.findOne({ where: { email } });
      if (!user) {
          return res.status(404).send('User not found');
      }
      const token = crypto.randomBytes(32).toString('hex');
      await db.PasswordReset.create({ userId: user.id, token });
      // Send email with the token
      res.send('Password reset requested');
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.resetPassword = async (req, res) => {
  try {
      const { token, newPassword } = req.body;
      const resetRecord = await db.PasswordReset.findOne({ where: { token } });
      if (!resetRecord) {
          return res.status(400).send('Invalid token');
      }
      const user = await db.User.findByPk(resetRecord.userId);
      user.password = newPassword; // Password hashing should be done here
      await user.save();
      await resetRecord.destroy();
      res.send('Password reset successful');
  } catch (error) {
      res.status(500).send('Server error');
  }
};