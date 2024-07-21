const db = require('../models');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

exports.generate2FA = async (req, res) => {
  try {
      const secret = speakeasy.generateSecret({ name: 'MyApp' });
      await db.User.update({ twoFASecret: secret.base32 }, { where: { id: req.user.id } });
      
      qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
          if (err) throw err;
          res.json({ secret: secret.base32, qrCodeUrl: data_url });
      });
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
          res.send('2FA verification successful');
      } else {
          res.status(400).send('Invalid token');
      }
  } catch (error) {
      res.status(500).send('Server error');
  }
};