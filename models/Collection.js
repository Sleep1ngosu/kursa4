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
	likes: {
		type: Array,
		default: [],
	},
	comments: {
		type: Array,
		default: [],
	},
	extraFields: {
		num_1: Number,
		num_2: Number,
		num_3: Number,
		string_1: String,
		string_2: String,
		string_3: String,
		date_1: Date,
		date_2: Date,
		date_3: Date,
		text_1: String,
		text_2: String,
		text_3: String,
	},
})

module.exports = Collection = mongoose.model('collections', CollectionSchema)
