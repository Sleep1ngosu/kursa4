import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import store from './redux/store'
import { loading } from './redux/actions/auth'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

function App() {
	useEffect(() => {
		store.dispatch(loading())
	}, [])

	return (
		<Router>
			<Header />
			<Switch></Switch>
		</Router>
	)
}

export default App
