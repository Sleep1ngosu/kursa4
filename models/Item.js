const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
	collection: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'collections',
	},
	name: {
		type: String,
		required: true,
	},
	fields: {
		type: Array,
		default: [],
	},
})

module.exports = Item = mongoose.model('items', ItemSchema)
