const express = require('express')
const router = express.Router()
const passport = require('passport')
const oauthController = require('../../controllers/oauth')

router.post(
	'/oauth/facebook',
	passport.authenticate('facebookToken', {
		session: false,
	}),
	oauthController.facebookAuth
)

module.exports = router
