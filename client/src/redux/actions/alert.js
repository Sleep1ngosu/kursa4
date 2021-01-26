import { SUCCESS_ALERT, ERROR_ALERT, CLEAR_ALERT } from './types'

export const clearAlert = () => (dispatch) => {
	dispatch({ type: CLEAR_ALERT })
}

export const setErrorAlert = (message) => (dispatch) => {
	dispatch({ type: ERROR_ALERT, payload: message })
}

export const setSuccessAlert = (message) => (dispatch) => {
	dispatch({ type: SUCCESS_ALERT, payload: message })
}
