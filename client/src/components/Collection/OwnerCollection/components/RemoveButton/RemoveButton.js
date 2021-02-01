import React from 'react'
import './RemoveButton.scss'
import { connect } from 'react-redux'
import { removeCollection } from '../../../../../redux/actions/removeCollection'

const RemoveButton = (props) => {
	const style = (props.isHidden && { display: 'none' }) || { display: 'flex' }

	const onDelete = async () => {
		console.log(props.id)
		await props.removeCollection(props.id)
	}

	return (
		<div style={style} className="ownerCollection__removeButton__wrapper">
			<button
				onClick={onDelete}
				className="ownerCollection__removeButton"
			>
				Remove
			</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		id: state.collection.collection.id,
	}
}

export default connect(mapStateToProps, { removeCollection })(RemoveButton)
