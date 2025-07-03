const express = require("express")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const joi = require("joi")
const app = express()

dotenv.config()
const SECRET_KEY = process.env.JWT_SECRET || 'mySecret456'
const users = []

app.use(express.json())

const schema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).required()
})

function middleware(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return res.status(400).send("Invalid")
  }
  try {
    const verified = jwt.verify(token, SECRET_KEY)
    req.user = verified
    next()
  } catch (error) {
    res.status(400).send("error in Authentication")
  }
}

app.post('/signup', (req, res) => {
  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const exists = users.find(u => u.email === req.body.email)
  if (exists) {
    return res.status(400).send("user already exists")
  }

  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  users.push(user)
  res.status(201).json({ message: 'User created successfully' })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(u => u.email === email && u.password === password)
  if (!user) {
    return res.status(400).send("invalid credentials")
  }
  const token = jwt.sign({ id: user.id, name: user.name }, SECRET_KEY, { expiresIn: '1h' })
  res.json({ message: 'Login successful', token })
})

app.get('/dashboard', middleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}` })
})

app.listen(3000, () => {
  console.log("Server running on 3000")
})
