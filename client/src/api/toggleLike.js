import axios from '../utils/axios'

export const toggleLike = async (collectionID) => {
	try {
		const URI = `/api/likes/toggle_like`
		const body = {
			id: collectionID,
		}
		const response = await axios.post(URI, body)
		console.log(response)
	} catch (err) {
		console.log(err)
	}
}
