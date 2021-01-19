const multer = require('multer')

module.exports = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		console.log(file)
		if (
			file.mimetype !== 'image/jpg' &&
			file.mimetype !== 'image/jpeg' &&
			file.mimetype !== 'image/png'
		) {
			cb(new Error('file type is not supported'), false)
		}
		cb(null, true)
	},
	limits: { fileSize: 1024 * 1024 },
})
