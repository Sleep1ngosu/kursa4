import React from 'react'
import './Block.scss'
import { connect } from 'react-redux'
import { logout } from '../../../../../redux/actions/auth'

const Block = (props) => {
	const onClick = (index) => {
		if (index === 1) {
			props.logout()
		}
	}

	return (
		<div
			onClick={() => onClick(props.index)}
			className="profileList__block__wrapper"
		>
			<div className="profileList__block">{props.text}</div>
		</div>
	)
}

export default connect(null, { logout })(Block)
