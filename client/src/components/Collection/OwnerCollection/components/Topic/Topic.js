import React from 'react'
import { connect } from 'react-redux'
import './Topic.scss'

const Topic = ({ collection }) => {
	return (
		<div className="collection__ownerCollection__collectionInfo__footer__topic">
			{collection.topic}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		collection: state.collection.collection,
	}
}

export default connect(mapStateToProps)(Topic)
