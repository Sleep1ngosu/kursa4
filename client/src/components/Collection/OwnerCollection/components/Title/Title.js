import React from 'react'
import { connect } from 'react-redux'
import './Title.scss'

const Title = ({ collection }) => {
	return (
		<div className="collection__ownerCollection__collectionInfo__title">
			<span
				title={collection.name}
				className="collection__ownerCollection__collectionInfo__title__text"
			>
				{collection.name}
			</span>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		collection: state.collection.collection,
	}
}

export default connect(mapStateToProps)(Title)
