const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

app.post("/register", (req, res) => {
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  res.json({
    message: "User registered successfully",
    data: value
  });
});

app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});
