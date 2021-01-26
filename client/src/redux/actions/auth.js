import axios from '../../utils/axios'
import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	SUCCESS_ALERT,
	ERROR_ALERT,
	CLEAR_ALERT,
	LOADING_FAILED,
	LOGOUT,
	LOADING_SUCCESS,
} from './types'
import setAuthToken from '../../utils/setAuthToken'
import { getUser } from '../../api/getUser'

export const loading = () => async (dispatch) => {
	const token = localStorage.getItem('token')
	if (!token) return dispatch({ type: LOADING_FAILED })
	try {
		setAuthToken(token)
		const URI = '/api/user'
		const response = await axios.get(URI)
		dispatch({
			type: LOADING_SUCCESS,
			payload: {
				username: response.data.user.username,
				role: response.data.user.role,
			},
		})
	} catch (err) {
		dispatch({ type: LOADING_FAILED })
	}
}

export const signup = ({ username, password, email }) => async (dispatch) => {
	try {
		const URI = '/api/user/sign_up'
		const body = { username, password, email }
		const response = await axios.post(URI, body)
		await dispatch({
			type: LOGIN_SUCCESS,
			payload: {
				user: {
					username: response.data.user.username,
					role: response.data.user.role,
				},
				token: response.data.token,
			},
		})
	} catch (err) {
		dispatch({ type: ERROR_ALERT, payload: err.response.data.message })
	}
}

export const login = ({ username, password }) => async (dispatch) => {
	try {
		const URI = '/api/user/sign_in'
		const body = { username, password }
		const response = await axios.post(URI, body)
		const user = await getUser(response.data.token)
		await dispatch({
			type: LOGIN_SUCCESS,
			payload: { user, token: response.data.token },
		})
	} catch (err) {
		dispatch({ type: ERROR_ALERT, payload: err.response.data.message })
	}
}

export const logout = () => async (dispatch) => {
	dispatch({ type: LOGOUT })
}
