const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check } = require('express-validator')
const commentHandler = require('../../controllers/comments')

router.post(
	'/',
	[
		check('id').not().isEmpty().withMessage('id is required'),
		check('text').not().isEmpty().withMessage('text is required'),
		auth,
	],
	commentHandler.addComment
)

router.delete(
	'/',
	[
		check('collectionID')
			.not()
			.isEmpty()
			.withMessage('collectionID is required'),
		check('commentID').not().isEmpty().withMessage('commentID is required'),
		auth,
	],
	commentHandler.deleteComment
)

module.exports = router
