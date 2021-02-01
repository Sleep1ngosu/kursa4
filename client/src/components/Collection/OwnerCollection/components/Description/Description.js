import React from 'react'
import './Description.scss'
import { connect } from 'react-redux'

const Description = ({ collection }) => {
	return (
		<div className="collection__ownerCollection__collectionInfo__description">
			{collection.description}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		collection: state.collection.collection,
	}
}

export default connect(mapStateToProps)(Description)
