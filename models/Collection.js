const mongoose = require('mongoose')
const crypto = require('crypto')

const CollectionSchema = mongoose.Schema({
	id: {
		type: String,
		default: crypto.randomBytes(32).toString('hex'),
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
	},
	topic: {
		type: String,
	},
	image: {
		type: Object,
	},
})

module.exports = Collection = mongoose.model('collections', CollectionSchema)
