import React from 'react'
import './Blocker.scss'
import { connect } from 'react-redux'
import { removeBlocker } from '../../redux/actions/blocker'

const Blocker = ({ blocker, removeBlocker }) => {
	const style = (blocker.isActive && { display: 'block' }) || {
		display: 'none',
	}

	const onRemoveBlocker = () => {
		removeBlocker()
	}

	const onClick = (blocker.isClicked && onRemoveBlocker) || null

	return <div style={style} onClick={onClick} className="blocker"></div>
}

const mapStateToProps = (state) => {
	return {
		blocker: state.blocker,
	}
}

export default connect(mapStateToProps, { removeBlocker })(Blocker)
