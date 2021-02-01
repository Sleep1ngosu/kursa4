import React from 'react'
import './PrevPage.scss'

const PrevPage = ({ icon, onClick }) => {
	return (
		<div className="myCollections__pages__prev">
			<img
				className="myCollections__pages__prev__icon"
				src={icon}
				alt="left arrow"
				onClick={onClick}
			/>
		</div>
	)
}

export default PrevPage
