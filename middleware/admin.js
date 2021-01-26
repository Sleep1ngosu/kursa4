const config = require('config')
const errorMessagesHandler = require('../errorHandle/errorMessagesHandler')
const errorMessages = require('../errorHandle/errorConsts').messages

exports.admin = (req, res, next) => {
	const { name, pass } = req.headers
	try {
		if (!name || !pass) {
			req.body.isAdmin = false
			next()
		} else if (
			name === config.get('admin_name') &&
			pass === config.get('admin_pass')
		) {
			req.body.isAdmin = true
			next()
		} else
			return errorMessagesHandler(
				res,
				errorMessages.WRONG_CREDENTIALS,
				400
			)
	} catch (err) {
		res.status(500).json({ message: 'server error', error: err })
	}
}
