import React, { useEffect } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import store from './redux/store'
import { loading } from './redux/actions/auth'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Collections from './components/Collections/Collections'
import MyCollections from './components/MyCollections/MyCollections'
import Settings from './components/Settings/Settings'
import NotFound from './components/NotFound/NotFound'
import Collection from './components/Collection/Collection'
import CreateCollection from './components/CreateCollection/CreateCollection'
import Blocker from './components/Blocker/Blocker'

function App() {
	useEffect(() => {
		store.dispatch(loading())
	}, [])

	return (
		<Router>
			<div className="app__wrapper">
				<CreateCollection />
				<Blocker />
				<Header />
				<Switch>
					<Route path="/news" component={News} />
					<Route path="/profile" component={Profile} />
					<Route path="/collections/:id" component={Collections} />
					<Route path="/my_collections" component={MyCollections} />
					<Route path="/settings" component={Settings} />
					<Route path="/collection" component={Collection} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
