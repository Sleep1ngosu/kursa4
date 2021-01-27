import axios from '../utils/axios'

export const getCollectionsByPage = async (username, page) => {
	try {
		const URI = `/api/collections/${username}/${page}`
		const response = await axios.get(URI)
		return response
	} catch (err) {
		return err.response
	}
}
