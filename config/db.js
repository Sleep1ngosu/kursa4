const mongoose = require('mongoose')
const config = require('config')

const connectDB = async () => {
	mongoose.connect(
		config.get('mongoURI'),
		{
			useFindAndModify: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		},
		() => {
			console.log('connected...')
		}
	)
}

module.exports = connectDB
