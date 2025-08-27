const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const joi = require("joi")
const router = express.Router()

const users = []

const userSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).required()
})

function authMiddleware(req, res, next) {
  const token = req.header('authorization')?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' })
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verified
    next()
  } catch (error) {
    res.status(400).send("invalid token you have entered")
  }
}

router.post('/signup', async (req, res) => {
  const { error } = userSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }

  const exists = users.find(u => u.email === req.body.email)
  if (exists) {
    return res.status(400).send("user already exists")
  }

  const salt = await bcrypt.genSalt(10)
  const hashPass = await bcrypt.hash(req.body.password, salt)

  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: hashPass
  }

  users.push(user)
  res.status(201).json({ message: 'User created successfully' })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = users.find(u => u.email === email)
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }

  const validPass = await bcrypt.compare(password, user.password)
  if (!validPass) {
    return res.status(400).send("Incorrect password")
  }

  const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET)

  res.json({ message: 'Login successful', token })
})

router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.name} to your dashboard!` })
})

module.exports = router
