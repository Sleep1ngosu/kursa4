import {
	SET_CLICKED_BLOCKER,
	REMOVE_BLOCKER,
	SET_UNCLICKED_BLOCKER,
} from './types'

export const setClickedBlocker = () => (dispatch) => {
	dispatch({ type: SET_CLICKED_BLOCKER })
}

export const removeBlocker = () => (dispatch) => {
	dispatch({ type: REMOVE_BLOCKER })
}

export const setUnclickedBlocker = () => (dispatch) => {
	dispatch({ type: SET_UNCLICKED_BLOCKER })
}
