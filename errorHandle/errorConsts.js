module.exports = {
	messages: {
		exists: (instance) => {
			return `user with this ${instance} is already exists`
		},
		wrong: (instance) => {
			return `${instance} is wrong`
		},
		notFound: (instance) => {
			return `${instance} is not found`
		},
		privilages: (method, instance) => {
			return `you don't have privilages for ${method} this ${instance}`
		},
		authError: () => {
			return 'first you must login'
		},
		WRONG_CREDENTIALS: 'Wrong credentials',
	},
}
