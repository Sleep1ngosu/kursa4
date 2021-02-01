import React from 'react'
import './Button.scss'
import search from '../../../../../../assets/Icons/search.png'

const Button = ({ page, maxPage }) => {
	return (
		<div className="myCollections__pages__button__wrapper">
			<button className="myCollections__pages__button" type="submit">
				<img
					className="myCollections__pages__button__icon"
					src={search}
					alt="search icon"
				/>
			</button>
			<span className="myCollections__pages__button__text">
				{page}/{maxPage}
			</span>
		</div>
	)
}

export default Button
