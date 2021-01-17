const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
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
	date: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = user = mongoose.model('users', UserSchema)
