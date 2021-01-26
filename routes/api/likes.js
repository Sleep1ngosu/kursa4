const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check } = require('express-validator')
const likesControllers = require('../../controllers/likes')

router.post(
	'/toggle_like',
	[check('id').not().isEmpty().withMessage('id is required'), auth],
	likesControllers.toggleLike
)

module.exports = router
