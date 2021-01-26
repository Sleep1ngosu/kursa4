const express = require('express')
const passport = require('passport')
const FacebookTokenStrategy = require('passport-facebook-token')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const config = require('config')
const User = require('./models/User')
const cors = require('cors')

connectDB()

app.use(express.json({ extended: false }))
app.use(cors())
app.use(passport.initialize())

passport.use(
	'facebookToken',
	new FacebookTokenStrategy(
		{
			clientID: config.get('CLIENT_ID_FACEBOOK'),
			clientSecret: config.get('CLIENT_SECRET_FACEBOOK'),
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				console.log(profile)
				done(false, profile)
			} catch (error) {
				done(error, false, error.message)
			}
		}
	)
)

app.use('/api/user', require('./routes/api/user'))
app.use('/api/comment', require('./routes/api/comments'))
app.use('/api/collections', require('./routes/api/collection'))
app.use('/api/likes', require('./routes/api/likes'))
app.use('/', require('./routes/api/facebookAuth'))

app.listen(PORT, () => {
	console.log(`server is up on ${PORT}`)
})
