const express = require('express')
const router = express.Router()
const User = require('../../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

/**
 * route:		/api/sign_in
 * description:	login
 * secure: 		public
 */

router.post(
	'/sign_in',
	[
		check('username').not().isEmpty().withMessage('username is required'),
		check('password').not().isEmpty().withMessage('password is required'),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return res.status(400).json({ message: errors.array() })

		const { username, password } = req.body
		try {
			let user = await User.findOne({ username })
			if (!user)
				return res.status(404).json({ message: 'Invalid username' })
			const isMatch = await bcrypt.compare(password, user.password)
			if (!isMatch)
				return res.status(400).json({ message: 'Invalid password' })

			const payload = {
				id: user.id,
				username,
			}

			jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
				if (err)
					return res
						.status(500)
						.json({ message: 'cant create token' })
				res.json({ user, token })
			})
		} catch (err) {
			res.status(500).json({ message: 'server error' })
		}
	}
)

module.exports = router