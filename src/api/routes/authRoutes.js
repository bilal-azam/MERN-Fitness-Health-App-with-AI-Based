const passwordValidator = require('../middleware/passwordValidator');

// Add password validation middleware to registration route
router.post('/register', passwordValidator, authController.register);