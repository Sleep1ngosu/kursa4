const express = require('express')
const router = express.Router()
const auth = require('../../../middleware/auth')
const upload = require('../../../utils/multer')
const cloudinary = require('../../../utils/cloudinary')
const Collection = require('../../../models/Collection')
const User = require('../../../models/User')

/**
 * route:		/api/collections/create
 * description:	login
 * secure: 		public
 */

router.post('/create', [upload.single('image'), auth], async (req, res) => {
	const { username, name, description, topic } = req.body
	try {
		let user = await User.findOne({ username })
		if (!user)
			return res.status(404).json({ message: 'first you must login' })

		let image = await cloudinary.uploader.upload(req.file.path)
		image = {
			id: image.public_id,
			url: image.secure_url,
		}

		const collection = new Collection({
			owner: user._id,
			name,
			description,
			topic,
			image,
		})
		await collection.save()

		res.send(collection)
	} catch (err) {
		res.status(500).json({ message: 'server error' })
	}
})

module.exports = router
