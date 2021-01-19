const express = require('express')
const router = express.Router()
const User = require('../../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

/**
 * route:		/api/sign_up
 * description:	registration
 * secure: 		public
 */

router.post(
	'/sign_up',
	[
		check('username').not().isEmpty().withMessage('username is required'),
		check('password').not().isEmpty().withMessage('password is required'),
		check('email').not().isEmail().withMessage('wrong email'),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return res.status(400).json({ message: errors.array() })

		const { username, password, email } = req.body
		try {
			let user = await User.findOne({ username })
			if (user)
				return res.status(400).json({
					message: 'user with this username is already exists',
				})

			user = await User.findOne({ email })
			if (user)
				return res
					.status(400)
					.json({ message: 'user with this email is already exists' })

			const salt = await bcrypt.genSalt(10)
			const hash = await bcrypt.hash(password, salt)

			user = new User({
				username,
				password: hash,
				email,
			})
			await user.save()

			const payload = {
				username,
				id: user.id,
			}

			jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
				if (err)
					return res
						.status(500)
						.json({ message: 'cant create token' })
				res.json({ token, user })
			})
		} catch (err) {
			res.status(500).json({ message: 'server error' })
		}
	}
)

module.exports = router
