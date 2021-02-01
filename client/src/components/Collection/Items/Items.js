import React from 'react'
import './Items.scss'
import CurrentItem from './CurrentItem/CurrentItem'

const Items = () => {
	return (
		<div className="items__wrapper">
			<div className="items__title">Items</div>
			<div className={`items__store`}>
				<CurrentItem />
				<CurrentItem />
				<CurrentItem />
				<CurrentItem />
				<CurrentItem />
				<CurrentItem />
			</div>
		</div>
	)
}

export default Items
