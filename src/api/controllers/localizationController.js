const i18n = require('i18n');

exports.setLanguage = (req, res) => {
  const { language } = req.body;
  i18n.setLocale(language);
  res.send('Language set');
};

exports.getLocalizedString = (req, res) => {
  const { key } = req.query;
  res.send(i18n.__(key));
};