const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

app.use(express.json({ extended: false }))

app.listen(PORT, () => {
	console.log(`server is up on ${PORT}`)
})
