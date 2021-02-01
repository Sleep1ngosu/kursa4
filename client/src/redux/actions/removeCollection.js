import axios from '../../utils/axios'
import history from '../../history/history'
import { TOGGLE_UPDATE_TRIGGER } from './types'

export const removeCollection = (id) => async (dispatch) => {
	try {
		const URI = `/api/collections/${id}`
		const response = await axios.delete(URI)
		console.log(response)
		history.replace('/my_collections/1')
		dispatch({ type: TOGGLE_UPDATE_TRIGGER })
		window.location.reload()
	} catch (err) {
		console.log(err.response.data.message)
	}
}
