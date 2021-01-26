import axios from '../utils/axios'

export const getUser = async (token) => {
	const URI = '/api/user'
	const config = {
		headers: {
			auth: token,
		},
	}
	const response = await axios.get(URI, config)
	return {
		username: response.data.user.username,
		role: response.data.user.role,
	}
}
