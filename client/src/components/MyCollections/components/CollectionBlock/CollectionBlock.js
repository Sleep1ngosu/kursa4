import React from 'react'
import './CollectionBlock.scss'
import pic from '../../../../assets/Images/pic.png'
import { Image } from 'cloudinary-react'
// import history from '../../../../history/history'
import { Link } from 'react-router-dom'

const CollectionBlock = (props) => {
	// const onClick = () => {
	// 	history.replace(`/collections/${props.id}`)
	// }

	return (
		<Link to={`/collection/${props.id}`} style={{ textDecoration: 'none' }}>
			<div className="collectionBlock__wrapper">
				<div className="collectionBlock__image">
					<Image
						cloudName="sleep1ngosu-cloud"
						publicId={props.imageID}
						className="collectionBlock__image__image"
					/>
				</div>
				<div className="collectionBlock__right">
					<div className="collectionBlock__right__title">
						<span
							title={props.title}
							className="collectionBlock__right__title__text"
						>
							{props.title}
						</span>
					</div>
					<div
						title={props.description}
						className="collectionBlock__right__description"
					>
						{props.description}
					</div>
					<div className="collectionBlock__right__topic">
						{props.topic}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CollectionBlock
