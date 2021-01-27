import React from 'react'
import { connect } from 'react-redux'

const ErrorBlock = (props) => {
	let cur_object =
		(props.type === 'login' && props.login) || props.registration

	let style = (cur_object.message && {
		display: 'flex',
		color: cur_object.color,
	}) || {
		display: 'none',
	}

	return (
		<div style={style} className={props.className}>
			{cur_object.message}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		registration: state.alert.registration,
		login: state.alert.login,
	}
}

export default connect(mapStateToProps, null)(ErrorBlock)
