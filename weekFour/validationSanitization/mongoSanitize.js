const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();
app.use(express.json());

// Apply mongoSanitize middleware to sanitize req.body, req.query, and req.params
app.use(mongoSanitize());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  res.json({
    message: "Sanitized login successful",
    email,
    password,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
