const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['en', 'es'],
  directory: path.join(__dirname, '../i18n'),
  defaultLocale: 'en',
  objectNotation: true
});

module.exports = i18n;