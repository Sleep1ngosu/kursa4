const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
	type: {
		type: String,
		enum: ['create_item', 'create_collection', 'create_user'],
		required: true,
	},
	owner: String,
	instance: Object,
})

module.exports = News = mongoose.model('news', NewsSchema)
