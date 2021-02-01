import {
	REGISTRATION_FAILED,
	CLEAR_LOGIN_ALERT,
	CLEAR_REGISTRATION_ALERT,
} from './types'

export const setErrorRegistrationAlert = (message) => (dispatch) => {
	dispatch({ type: REGISTRATION_FAILED, payload: message })
	dispatch({ type: CLEAR_REGISTRATION_ALERT })
}

export const clearRegistrationAlert = () => (dispatch) => {
	dispatch({ type: CLEAR_REGISTRATION_ALERT })
}

export const clearLoginAlert = () => (dispatch) => {
	dispatch({ type: CLEAR_LOGIN_ALERT })
}
