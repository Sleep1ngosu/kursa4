import {
	SET_COLLECTION,
	REMOVE_COLLECTION,
	TOGGLE_LIKE,
} from '../actions/types'

const initialState = {
	isOwner: false,
	isLiked: undefined,
	collection: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_COLLECTION: {
			return {
				...state,
				isOwner: action.payload.isOwner,
				collection: action.payload.collection,
				isLiked: action.payload.isLiked,
			}
		}
		case REMOVE_COLLECTION: {
			return {
				...state,
				isOwner: false,
				collection: null,
			}
		}
		case TOGGLE_LIKE: {
			return {
				...state,
				isLiked: !state.isLiked,
			}
		}

		default:
			return state
	}
}
