import {
	SET_CLICKED_BLOCKER,
	REMOVE_BLOCKER,
	SET_UNCLICKED_BLOCKER,
} from '../actions/types'

const initialState = {
	isActive: false,
	isClicked: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CLICKED_BLOCKER: {
			return {
				...state,
				isActive: true,
				isClicked: true,
			}
		}
		case SET_UNCLICKED_BLOCKER: {
			return {
				...state,
				isActive: true,
				isClicked: false,
			}
		}
		case REMOVE_BLOCKER: {
			return {
				...state,
				isActive: false,
			}
		}
		default:
			return state
	}
}
