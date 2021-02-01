import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import NotAuthenticatedHeader from './containers/NotAuthenticatedHeader/NotAuthenticatedHeader'
import AuthenticatedHeader from './containers/AuthenticatedHeader/AuthenticatedHeader'

const Header = (props) => {
	let renderedHeader = null
	props.isAuthenticated
		? (renderedHeader = <AuthenticatedHeader />)
		: (renderedHeader = <NotAuthenticatedHeader />)

	let style

	if (props.isLoading) {
		renderedHeader = null
		style = { display: 'none' }
	}

	return (
		<header style={style} className="header__wrapper">
			{renderedHeader}
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
		isLoading: state.user.isLoading,
	}
}

export default connect(mapStateToProps, null)(Header)
