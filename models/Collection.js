const mongoose = require('mongoose')

const CollectionSchema = mongoose.Schema({
	ref: {
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
		type: String,
	},
})

module.exports = Collection = mongoose.model('collections', CollectionSchema)
