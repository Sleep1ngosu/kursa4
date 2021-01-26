import React from 'react'
import { connect } from 'react-redux'

const ErrorBlock = (props) => {
	let style = (props.message && { display: 'flex', color: props.color }) || {
		display: 'none',
	}

	return (
		<div style={style} className={props.className}>
			{props.message}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		message: state.alert.message,
		color: state.alert.color,
	}
}

export default connect(mapStateToProps, null)(ErrorBlock)
