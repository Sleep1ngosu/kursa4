import React, { useState, useEffect } from 'react'
import './OwnerCollection.scss'
import { connect } from 'react-redux'
import like from '../../../assets/Icons/like.png'
import likeActive from '../../../assets/Icons/like_active.png'
import { getCurrentCollection } from '../../../redux/actions/collection'
import Items from '../Items/Items'
import {
	toggleLike,
	removeCurrentCollection,
} from '../../../redux/actions/collection'
import Title from './components/Title/Title'
import Description from './components/Description/Description'
import CollectionImage from './components/CollectionImage/CollectionImage'
import Topic from './components/Topic/Topic'
import Likes from './components/Likes/Likes'
import RemoveButton from './components/RemoveButton/RemoveButton'
import UpdateButton from './components/UpdateButton/UpdateButton'

const OwnerCollection = ({
	username,
	role,
	collection,
	isOwner,
	getCurrentCollection,
	toggleLike,
	removeCurrentCollection,
}) => {
	const id = window.location.pathname.split('/')[
		window.location.pathname.split('/').length - 1
	]
	let [likes, setLikes] = useState(null)
	let [isLocalLiked, setLocalLiked] = useState(null)

	// useeffect for fetching collection data
	useEffect(() => {
		fetch = async () => {
			if (username) {
				const [response, isLiked] = await getCurrentCollection(
					id,
					username
				)
				setLikes(response.data.collection.likes.length)
				setLocalLiked(isLiked)
			}
		}
		fetch()
	}, [username])

	// useeffect for removing collection in redux
	useEffect(() => {
		return () => {
			removeCurrentCollection()
		}
	}, [id])

	// maintain renderedLikeIcon (isliked or not by cur user)
	let renderedLikeIcon = (isLocalLiked && likeActive) || like

	const onToggleLike = async (isLocalLiked) => {
		if (isLocalLiked) {
			setLikes((likes) => likes - 1)
		} else {
			setLikes((likes) => likes + 1)
		}
		setLocalLiked(!isLocalLiked)
		await toggleLike(id)
	}

	// props for Likes component
	const likeProps = { renderedLikeIcon, isLocalLiked, likes, onToggleLike }

	let isHiddenRemoveButton = !isOwner

	if (role === 'admin') {
		isHiddenRemoveButton = true
	}

	let renderedComponent
	if (collection) {
		renderedComponent = (
			<div className="collection__ownerCollection__wrapper">
				<div className="collection__ownerCollection__collectionInfo">
					<CollectionImage />
					<div className="collection__ownerCollection__collectionInfo__text">
						<Title />
						<Description />
						<div className="collection__ownerCollection__collectionInfo__footer">
							<Topic />
							<Likes {...likeProps} />
						</div>
					</div>
				</div>
				<RemoveButton isHidden={isHiddenRemoveButton} />
				<UpdateButton />
				{/* <div className="collection__ownerCollection__items">
					<Items />
				</div> */}
			</div>
		)
	} else renderedComponent = null

	return renderedComponent
}

const mapStateToProps = (state) => {
	return {
		username: state.user.user.username,
		role: state.user.user.role,
		collection: state.collection.collection,
		isOwner: state.collection.isOwner,
	}
}

export default connect(mapStateToProps, {
	getCurrentCollection,
	toggleLike,
	removeCurrentCollection,
})(OwnerCollection)
