import React from 'react'
import './CollectionImage.scss'
import { connect } from 'react-redux'
import { Image } from 'cloudinary-react'

const CollectionImage = ({ collection }) => {
	return (
		<div className="collection__ownerCollection__collectionInfo__image">
			<Image
				cloudName="sleep1ngosu-cloud"
				publicId={collection.image.id}
				className="collection__ownerCollection__collectionInfo__image__image"
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		collection: state.collection.collection,
	}
}

export default connect(mapStateToProps)(CollectionImage)
