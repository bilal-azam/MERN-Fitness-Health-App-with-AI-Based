const express = require('express');
const app = express();
const localization = require('../../middleware/localization');

app.use(localization.init);