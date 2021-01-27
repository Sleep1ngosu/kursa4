import React from 'react'
import './Block.scss'
import { connect } from 'react-redux'
import { logout } from '../../../../../redux/actions/auth'
import { Link } from 'react-router-dom'

const Block = (props) => {
	const onClick = () => {
		props.logout()
	}
	let path = '/',
		cur_onclick
	if (props.index === 0) {
		path = '/profile'
		cur_onclick = props.toggleDropdown
	} else if (props.index === 1) {
		path = '/my_collections/1'
		cur_onclick = props.toggleDropdown
	} else if (props.index === 2) {
		path = '/'
		cur_onclick = onClick
	}

	return (
		<Link
			to={path}
			style={{ textDecoration: 'none' }}
			onClick={cur_onclick}
		>
			<div className="profileList__block__wrapper">
				<div className="profileList__block">{props.text}</div>
			</div>
		</Link>
	)
}

export default connect(null, { logout })(Block)
