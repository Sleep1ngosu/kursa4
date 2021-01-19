const express = require('express')
const router = express.Router()
const User = require('../../../models/User')
const Collection = require('../../../models/Collection')
const auth = require('../../../middleware/auth')
const cloudinary = require('../../../utils/cloudinary')
const storage = require('../../../utils/multer')

/**
 * route: 	/api/collections/update
 * desc:	update user's collection
 * secure: 	PRIVATE
 */

router.put('/update', [storage.single('image'), auth], async (req, res) => {
	const { id, description, topic, name, userID } = req.body
	try {
		let collection = await Collection.findOne({ id })
		if (!collection)
			return res.status(404).json({ message: 'collection is not found' })
		let image = req.file
		if (image) {
			if (collection.image.id) {
				await cloudinary.uploader.destroy(collection.image.id)
			}
			image = await cloudinary.uploader.upload(image.path)
			image = {
				id: image.public_id,
				image: image.secure_url,
			}
		}

		collection = await Collection.findOneAndUpdate(
			{ id },
			{
				...collection,
				description,
				topic,
				name,
				image,
			},
			{ new: true }
		)

		res.json({
			message: 'collection has been updated successfully!',
			collection,
		})
	} catch (err) {
		res.status(500).json({ message: 'server error', error: err })
	}
})

module.exports = router
