import {
	SHOW_CREATE_COLLECTION,
	HIDE_CREATE_COLLECTION,
	SET_FILE,
	CREATE_COLLECTION_RESPONSE,
	CLEAR_COLLECTION_RESPONSE,
	TOGGLE_UPDATE_TRIGGER,
} from '../actions/types'

const initialState = {
	isShow: false,
	file: [],
	response: {
		isShow: false,
		isSuccess: false,
		message: '',
	},
	updateTrigger: false,
	isSuccess: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_CREATE_COLLECTION: {
			return {
				...state,
				isShow: true,
			}
		}
		case HIDE_CREATE_COLLECTION: {
			return {
				...state,
				isShow: false,
			}
		}
		case SET_FILE: {
			return {
				...state,
				file: { ...action.payload },
			}
		}
		case CREATE_COLLECTION_RESPONSE: {
			return {
				...state,
				response: {
					isShow: true,
					message: action.payload.message,
					isSuccess: action.payload.isSuccess,
				},
			}
		}
		case CLEAR_COLLECTION_RESPONSE: {
			return {
				...state,
				response: {
					isShow: false,
					message: '',
					isSuccess: false,
				},
			}
		}
		case TOGGLE_UPDATE_TRIGGER: {
			return {
				...state,
				updateTrigger: !state.updateTrigger,
			}
		}
		default:
			return state
	}
}
