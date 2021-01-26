import { SUCCESS_ALERT, CLEAR_ALERT, ERROR_ALERT } from '../actions/types'

const initialState = {
	message: '',
	color: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_ALERT: {
			return {
				message: action.payload,
				color: 'green',
			}
		}
		case ERROR_ALERT: {
			return {
				message: action.payload,
				color: 'red',
			}
		}
		case CLEAR_ALERT: {
			return {
				message: '',
				color: '',
			}
		}
		default:
			return state
	}
}
