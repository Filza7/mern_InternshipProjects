const express = require("express")
const dotenv = require("dotenv")
const userRoutes = require("./user") // use ./ because user.js is in same folder
const app = express()

dotenv.config()
app.use(express.json())

app.use("/api", userRoutes)

app.get("/", (req, res) => {
  res.send("welcomeeeeeeeeeeeeeeeeee")
})

app.listen(3000, () => {
  console.log("server is running on 3000")
})
