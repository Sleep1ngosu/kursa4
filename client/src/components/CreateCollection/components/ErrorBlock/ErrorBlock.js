import React from 'react'
import './ErrorBlock.scss'
import { connect } from 'react-redux'
import close from '../../../../assets/Icons/close.png'
import { clearError } from '../../../../redux/actions/createCollection'

const ErrorBlock = (props) => {
	const style = (props.response.isShow && { display: 'flex' }) || {
		display: 'none',
	}

	const onClose = () => {
		props.clearError()
	}

	const color = (props.response.isSuccess && { color: 'green' }) || {
		color: 'red',
	}

	return (
		<div style={style} className="createCollection__errorBlock__wrapper">
			<div className="createCollection__errorBlock">
				<div
					style={color}
					className="createCollection__errorBlock__message"
				>
					<span className="createCollection__errorBlock__message__title">
						{(props.response.isSuccess && 'Success') || 'Error'}
					</span>
					<span className="createCollection__errorBlock__message__error">
						{props.response.message}
					</span>
				</div>
				<div
					onClick={onClose}
					className="createCollection__errorBlock__close"
				>
					<img
						className="createCollection__errorBlock__close__icon"
						src={close}
						alt="close icon"
					/>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		response: state.createCollection.response,
	}
}

export default connect(mapStateToProps, { clearError })(ErrorBlock)
