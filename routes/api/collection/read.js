const express = require('express')
const router = express.Router()
const auth = require('../../../middleware/auth')
const Collection = require('../../../models/Collection')
const User = require('../../../models/User')

/**
 * route:		/api/collections/get_collection/:id
 * description:	get collection by its id
 * secure: 		public
 */
router.get('/get_collection/:id', async (req, res) => {
	const { id } = req.params
	try {
		let collection = await Collection.findOne({ id }).populate(
			'owner',
			'username'
		)
		if (!collection)
			return res
				.status(404)
				.json({ message: 'collection with this id is not found' })

		res.json({ collection })
	} catch (err) {
		res.status(500).json({ message: 'server error', error: err })
	}
})

/**
 * route:		/api/collections/get_collections_all
 * description:	get all collections
 * secure: 		public
 */
router.get('/get_collections_all', async (req, res) => {
	try {
		let collections = await Collection.find({}).populate(
			'owner',
			'username'
		)
		if (!collections)
			return res
				.status(404)
				.json({ message: 'ERROR! cant find EVEN ONE collection p_p' })

		res.json({ collections })
	} catch (err) {
		res.status(500).json({ message: 'server error' })
	}
})

/**
 * route:		/api/collections/get_collection_by_username/:username
 * description:	get user's collections
 * secure: 		public
 */
router.get('/get_collections_by_username/:username', async (req, res) => {
	const { username } = req.params
	try {
		const user = await User.findOne({ username }).populate(
			'owner',
			'username'
		)
		if (!user)
			return res.status(404).json({ message: 'this user is not found' })

		const userID = user._id
		const collections = await Collection.find({ owner: userID })
		if (!collections)
			return res
				.status(404)
				.json({ message: 'this user does not have any collections' })

		res.json({ owner: userID, collections })
	} catch (err) {
		res.status(500).json({ message: 'server error' })
	}
})

// router.get('/get_collections?filter', (req, res) => {})

module.exports = router
