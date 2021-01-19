const cloudinary = require('cloudinary').v2
const config = require('config')

cloudinary.config({
	cloud_name: config.get('cloud_name'),
	api_key: config.get('API_Key'),
	api_secret: config.get('API_Secret'),
})

module.exports = cloudinary
