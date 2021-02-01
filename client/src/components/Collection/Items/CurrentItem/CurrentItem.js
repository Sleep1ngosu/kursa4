import React, { useState } from 'react'
import './CurrentItem.scss'
import { Image } from 'cloudinary-react'
import deleteIcon from '../../../../assets/Icons/delete.png'
import deleteHoverIcon from '../../../../assets/Icons/delete_hover.png'
import downArrow from '../../../../assets/Icons/down_arrow.png'

const Item = () => {
	const [isHovered, setHovered] = useState(false)
	let renderedIcon = (!isHovered && deleteIcon) || deleteHoverIcon

	const onToggleHoverIcon = () => {
		setHovered(!isHovered)
	}

	return (
		<div className="currentItem__wrapper">
			<img
				className="currentItem__delete__icon"
				src={renderedIcon}
				alt="delete icon"
				onMouseEnter={onToggleHoverIcon}
				onMouseLeave={onToggleHoverIcon}
			/>
			<div className="currentItem__info__wrapper">
				<div className="currentItem__info__title">
					<span className="currentItem__info__title__text">
						Some title
					</span>
				</div>
				{/* <div className="currentItem__info__description">
					Some description Some descriptionSome descriptionSome
					descriptionSome descriptionSome descriptionSome
					descriptionSome descriptionSome descriptionSomedisplay:
					-webkit-box; -webkit-line-clamp: 3; -webkit-box-orient:
					vertical; position: relative; font-size: 1.6rem; max-height:
					8.1rem; font-weight: 400; color: #3f3f3f; line-height:
					2.3rem; overflow: hidden; padding-top: 1rem;
				</div> */}
				<div className="currentItem__info__description"></div>
				<div className="currentItem__info__extend">
					<img
						className="currentItem__info__extend__icon"
						src={downArrow}
						alt="down arrow"
					/>
				</div>
			</div>
			<div className="currentItem__image__wrapper">
				<Image
					cloudName="sleep1ngosu-cloud"
					publicId="j2bttddhrqlzgp6rsiem"
					className="currentItem__image"
				/>
			</div>
		</div>
	)
}

export default Item
