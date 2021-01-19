const express = require('express')
const router = express.Router()
const Collection = require('../../../models/Collection')
const cloudinary = require('../../../utils/cloudinary')
const auth = require('../../../middleware/auth')

/**
 * route:		/api/collections/delete/:id
 * description:	delete user's collection
 * secure: 		public
 */
router.delete('/delete/:id', auth, async (req, res) => {
	const { id } = req.params
	try {
		const collection = await Collection.findOne({ id })
		if (!collection)
			return res
				.status(404)
				.json({ message: 'this collection is not found' })

		await cloudinary.uploader.destroy(collection.image.id)
		await collection.remove()
		res.json({ message: 'collection has been deleted successfully' })
	} catch (err) {
		res.status(500).json({ message: 'server error' })
	}
})

module.exports = router
