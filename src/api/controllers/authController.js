const speakeasy = require('speakeasy');
const db = require('../models');
const nodemailer = require('nodemailer');

exports.generate2FASecret = async (req, res) => {
  try {
      const secret = speakeasy.generateSecret();
      await db.User.update({ twoFASecret: secret.base32 }, { where: { id: req.user.id } });
      res.json({ secret: secret.base32 });
  } catch (error) {
      res.status(500).send('Server error');
  }
};

exports.verify2FA = async (req, res) => {
  try {
      const { token } = req.body;
      const user = await db.User.findByPk(req.user.id);
      const verified = speakeasy.totp.verify({
          secret: user.twoFASecret,
          encoding: 'base32',
          token
      });
      if (verified) {
          res.send('2FA verified');
      } else {
          res.status(400).send('Invalid token');
      }
  } catch (error) {
      res.status(500).send('Server error');
  }
};