const passwordValidator = require('password-validator');

const schema = new passwordValidator();
schema
  .is().min(8)                                    // Minimum length 8
  .is().max(100)                                  // Maximum length 100
  .has().uppercase()                             // Must have uppercase letters
  .has().lowercase()                             // Must have lowercase letters
  .has().digits()                                // Must have at least 1 digit
  .has().not().spaces();                         // Should not have spaces

module.exports = (req, res, next) => {
  const { password } = req.body;
  if (schema.validate(password)) {
      next();
  } else {
      res.status(400).send('Password does not meet requirements');
  }
};