import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOADING_SUCCESS,
	LOADING_FAILED,
	LOGOUT,
} from '../actions/types'

const initialState = {
	user: {},
	isLoading: true,
	isAuthenticated: false,
	token: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS: {
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				user: action.payload.user,
				isLoading: false,
				isAuthenticated: true,
				token: action.payload.token,
			}
		}
		case LOADING_SUCCESS: {
			return {
				...state,
				user: action.payload,
				token: localStorage.getItem('token'),
				isAuthenticated: true,
				isLoading: false,
			}
		}
		case LOADING_FAILED:
		case LOGOUT: {
			localStorage.removeItem('token')
			return {
				...state,
				token: '',
				user: {},
				isAuthenticated: false,
				isLoading: false,
			}
		}
		default:
			return state
	}
}
