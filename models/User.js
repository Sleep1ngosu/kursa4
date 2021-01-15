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
	},
	email: {
		type: String,
		require: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
})

module.exports = user = mongoose.model('users', UserSchema)
