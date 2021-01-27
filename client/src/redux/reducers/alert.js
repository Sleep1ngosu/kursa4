import {
	REGISTRATION_FAILED,
	LOGIN_FAILED,
	CLEAR_LOGIN_ALERT,
	CLEAR_REGISTRATION_ALERT,
} from '../actions/types'

const initialState = {
	registration: {
		message: '',
		color: '',
	},
	login: {
		message: '',
		color: '',
	},
}

export default (state = initialState, action) => {
	switch (action.type) {
		case REGISTRATION_FAILED: {
			return {
				...state,
				registration: {
					message: action.payload,
					color: 'red',
				},
			}
		}
		case LOGIN_FAILED: {
			return {
				...state,
				login: {
					message: action.payload,
					color: 'red',
				},
			}
		}
		case CLEAR_LOGIN_ALERT: {
			return {
				...state,
				login: {
					message: '',
					color: '',
				},
			}
		}
		case CLEAR_REGISTRATION_ALERT: {
			return {
				...state,
				registration: {
					message: '',
					color: '',
				},
			}
		}
		default:
			return state
	}
}
