const mongoose = require('mongoose')
const crypto = require('crypto')

const UserSchema = mongoose.Schema({
	id: {
		type: String,
		default: crypto.randomBytes(16).toString('hex'),
	},
	username: {
		type: String,
		require: true,
		trim: true,
	},
	password: {
		type: String,
		require: true,
		trim: true,
	},
	email: {
		type: String,
		require: true,
	},
	role: {
		type: String,
		default: 'user',
	},
	language: {
		type: String,
		enum: ['en', 'ru'],
		default: 'en',
	},
	date: {
		type: Date,
		default: Date.now(),
	},
	facebookId: String,
	googleId: String,
})

module.exports = user = mongoose.model('users', UserSchema)
