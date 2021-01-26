module.exports = errorMessagesHandler = (res, message, code) => {
	res.status(code).json({ message })
}
