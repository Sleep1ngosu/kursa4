import React from 'react'
import './Close.scss'
import { connect } from 'react-redux'
import close from '../../../../assets/Icons/close.png'
// import { removeBlocker } from '../../../../redux/actions/blocker'
// import { hideCreateCollection } from '../../../../redux/actions/createCollection'

const Close = ({ onClick, hideCreateCollection, removeBlocker }) => {
	// const onClick = () => {
	// 	hideCreateCollection()
	// 	removeBlocker()
	// }

	return (
		<div onClick={onClick} className="createCollection__close">
			<img
				src={close}
				alt="close icon"
				className="createCollection__close__icon"
			/>
		</div>
	)
}

export default Close
