const Item = require('../models/Item')
const Collection = require('../models/Collection')
const User = require('../models/User')
const crypto = require('crypto')
const errorMessagesHandler = require('../errorHandle/errorMessagesHandler')
const errorConsts = require('../errorHandle/errorConsts').messages

module.exports = {
	createItem: async (req, res) => {
		const { username, collectionID, name, fields } = req.body
		try {
			const user = await User.findOne({ username })
			if (!user)
				return errorMessagesHandler(res, errorConsts.authError(), 404)

			const collection = await Collection.findOne({ collectionID })
			if (!collection)
				return errorMessagesHandler(
					res,
					errorConsts.notFound('collection'),
					404
				)

			const item = new Item({
				collection: collectionID,
				name,
			})

			await item.save()

			res.json({ item })
		} catch (err) {
			res.status(500).json({ message: 'server error' })
		}
	},
}
