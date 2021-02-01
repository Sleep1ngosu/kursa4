import React from 'react'
import './NextPage.scss'

const NextPage = ({ icon, onClick }) => {
	return (
		<div className="myCollections__pages__next">
			<img
				className="myCollections__pages__next__icon"
				src={icon}
				alt="left arrow"
				onClick={onClick}
			/>
		</div>
	)
}

export default NextPage
