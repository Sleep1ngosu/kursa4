import React from 'react'
import './InputPage.scss'

const InputPage = ({ max }) => {
	return (
		<div className="myCollections__pages__inputPage__wrapper">
			<input
				className="myCollections__pages__inputPage"
				type="number"
				required
				name="page"
				min="1"
				max={max}
			/>
		</div>
	)
}

export default InputPage
