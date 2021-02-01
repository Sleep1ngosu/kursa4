// import toFormData from 'to-formdata'
import { serialize } from 'object-to-formdata'
import axios from '../../utils/axios'

import {
	SHOW_CREATE_COLLECTION,
	HIDE_CREATE_COLLECTION,
	SET_FILE,
	CREATE_COLLECTION_RESPONSE,
	CLEAR_COLLECTION_RESPONSE,
	TOGGLE_UPDATE_TRIGGER,
} from './types'

import { removeBlocker } from './blocker'

export const showCreateCollection = () => (dispatch) => {
	dispatch({ type: SHOW_CREATE_COLLECTION })
}

export const hideCreateCollection = () => (dispatch) => {
	dispatch({ type: HIDE_CREATE_COLLECTION })
}

export const setImage = (file) => (dispatch) => {
	if (file) {
		dispatch({ type: SET_FILE, payload: file })
	}
}

export const setError = ({ isSuccess, message }) => (dispatch) => {
	dispatch({
		type: CREATE_COLLECTION_RESPONSE,
		payload: { isSuccess, message },
	})
}

export const clearError = () => (dispatch) => {
	dispatch({ type: CLEAR_COLLECTION_RESPONSE })
}

export const toggleUpdateTrigger = () => (dispatch) => {
	dispatch({ type: TOGGLE_UPDATE_TRIGGER })
}

export const createNewCollection = (image, data) => async (dispatch) => {
	try {
		const URI = '/api/collections'
		const body = {
			name: data.title,
			description: data.description,
			topic: data.topic[0].label,
			image,
		}
		const formData = serialize(body)
		const config = {
			headers: {
				'Content-Type': 'multipart/formData',
			},
		}
		await axios.post(URI, formData, config)
		// console.log(response)
		// dispatch(removeBlocker())
		// dispatch(hideCreateCollection())
		dispatch(toggleUpdateTrigger())
		dispatch({
			type: CREATE_COLLECTION_RESPONSE,
			payload: {
				isSuccess: true,
				message: 'Created',
			},
		})
	} catch (err) {
		// console.log(err)
		dispatch({
			type: CREATE_COLLECTION_RESPONSE,
			payload: { isSuccess: false, message: err.response.data.message },
		})
	}
}
