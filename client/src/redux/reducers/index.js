import { combineReducers } from 'redux'
import user from './user'
import alert from './alert'
import collection from './collection'
import blocker from './blocker'
import createCollection from './createCollection'

export default combineReducers({
	user,
	alert,
	collection,
	blocker,
	createCollection,
})
