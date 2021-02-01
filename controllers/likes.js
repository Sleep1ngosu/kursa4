const errorMessagesHandler = require('../errorHandle/errorMessagesHandler')
const Collection = require('../models/Collection')
const { validationResult } = require('express-validator')

module.exports = {
	toggleLike: async (req, res, next) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return errorMessagesHandler(res, errors.array(), 400)

		const { username, id } = req.body
		try {
			let collection = await Collection.findOne({ id })
			if (!collection)
				return res
					.status(404)
					.json({ message: 'collections is not found' })
			let index,
				isExist = false
			let likes = collection.likes
			likes.forEach((cur_like, cur_index) => {
				if (cur_like === username) {
					index = cur_index
					isExist = true
				}
			})
			let message
			if (isExist === false) {
				likes = [...likes, username]
				collection = await Collection.findOneAndUpdate(
					{ id },
					{ likes },
					{ new: true }
				)
				message = 'like has been added successfully'
			} else {
				collection = await Collection.findOneAndUpdate(
					{ id },
					{ likes: likes.filter((e) => e !== username) },
					{ new: true }
				)
				message = 'like has been removed successfully'
			}
			res.status(200).json({ collection, message })
		} catch (err) {
			res.status(500).json({ message: 'server error', error: err })
		}
	},
}
