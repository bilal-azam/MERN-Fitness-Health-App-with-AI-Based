const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password'
  }
});

exports.scheduleEmail = (req, res) => {
  const { to, subject, text, sendAt } = req.body;
  schedule.scheduleJob(new Date(sendAt), () => {
      transporter.sendMail({ from: 'your_email@gmail.com', to, subject, text }, (error, info) => {
          if (error) {
              console.error('Error sending email:', error);
              return;
          }
          console.log('Email sent:', info.response);
      });
  });
  res.send('Email scheduled');
};