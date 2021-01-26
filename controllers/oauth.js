module.exports = {
	facebookAuth: async (req, res, next) => res.send(req.user),
}
