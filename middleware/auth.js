const jwt = require('jsonwebtoken')
const config = require('config')

const auth = async (req, res, next) => {
	try {
		const token = req.headers['auth']
		if (!token) return res.status(400).json({ message: 'you should login' })
		jwt.verify(token, config.get('jwtSecret'), (err, user) => {
			if (err) throw new Error()
			req.body.username = user.username
			req.body.userID = user.id
			next()
		})
	} catch (err) {
		res.status(500).json({ message: 'wrong token' })
	}
}

module.exports = auth
