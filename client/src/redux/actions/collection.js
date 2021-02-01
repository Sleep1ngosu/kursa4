import axios from '../../utils/axios'
import { SET_COLLECTION, REMOVE_COLLECTION, TOGGLE_LIKE } from './types'

export const getCurrentCollection = (id, username) => async (dispatch) => {
	try {
		const URI = `api/collections/${id}`
		const response = await axios.get(URI)
		let isOwner =
			response.data.collection.owner.username === username || false
		let isLiked =
			response.data.collection.likes.indexOf(username) !== -1 || false
		dispatch({
			type: SET_COLLECTION,
			payload: { isOwner, collection: response.data.collection, isLiked },
		})
		return [response, isLiked]
	} catch (err) {
		console.log(err.response.data.message)
	}
}

export const removeCurrentCollection = () => async (dispatch) => {
	dispatch({ type: REMOVE_COLLECTION })
}

export const toggleLike = (id) => async (dispatch) => {
	try {
		const uri_toggle_like = `/api/likes/toggle_like`
		const body_toggle_like = { id }
		await axios.post(uri_toggle_like, body_toggle_like)
		dispatch({ type: TOGGLE_LIKE })
	} catch (err) {
		console.log(err.response.data.message)
	}
}
