import React from 'react'
import './Likes.scss'

const Likes = ({ renderedLikeIcon, isLocalLiked, likes, onToggleLike }) => {
	return (
		<div className="collection__ownerCollection__collectionInfo__footer__likes">
			<div className="collection__ownerCollection__collectionInfo__footer__likes__icon">
				<img
					className="collection__ownerCollection__collectionInfo__footer__likes__icon__icon"
					src={renderedLikeIcon}
					alt="like icon"
					onClick={() => onToggleLike(isLocalLiked)}
				/>
			</div>
			<div className="collection__ownerCollection__collectionInfo__footer__likes__counter">
				{likes}
			</div>
		</div>
	)
}

export default Likes
