const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.post('/register', [
  body('email')
    .isEmail()
    .withMessage('Invalid Email')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Invalid password')
    .trim()
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.json({
    message: 'User registered!',
    data: req.body
  });
});

module.exports = router;
