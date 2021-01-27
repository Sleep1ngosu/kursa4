import React from 'react'
import './ProfileList.scss'
import { connect } from 'react-redux'
import Block from './Block/Block'

const ProfileList = (props) => {
	const texts = ['Profile', 'My collections', 'Logout']

	const blockList = texts.map((text, index) => {
		return (
			<Block
				key={`header__auth__profileList__${index}`}
				text={text}
				index={index}
				toggleDropdown={props.toggleDropdown}
			/>
		)
	})

	return (
		<div style={props.style} className="header__auth__profileList">
			<div className="header__auth__profileList__username">
				{props.username}
			</div>
			{blockList}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.user.user.username,
	}
}

export default connect(mapStateToProps, null)(ProfileList)
