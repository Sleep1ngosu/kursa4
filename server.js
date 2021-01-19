const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

app.use(express.json({ extended: false }))

// registration & login
app.use('/api', require('./routes/api/user/signin'))
app.use('/api', require('./routes/api/user/signup'))

// collection CRUD
app.use('/api/collections', require('./routes/api/collection/create'))
app.use('/api/collections', require('./routes/api/collection/delete'))
app.use('/api/collections', require('./routes/api/collection/read'))
app.use('/api/collections', require('./routes/api/collection/update'))

app.listen(PORT, () => {
	console.log(`server is up on ${PORT}`)
})
