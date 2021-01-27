import React, { useState, Fragment } from 'react'
import './Collections.scss'
import left_arrow from '../../../../assets/Icons/left_arrow.png'
import right_arrow from '../../../../assets/Icons/right_arrow.png'
import search from '../../../../assets/Icons/search.png'
import history from '../../../../history/history'

const Collections = (props) => {
	const onSubmit = (e) => {
		e.preventDefault()
		props.setPage(+e.target[0].value)
		history.replace(`/my_collections/${e.target[0].value}`)
	}

	const next = () => {
		if (props.page < props.maxPage) {
			props.setPage(+props.page + 1)
			history.replace(`/my_collections/${+props.page + 1}`)
		}
	}

	const prev = () => {
		if (props.page > 1) {
			props.setPage(+props.page - 1)
			history.replace(`/my_collections/${+props.page - 1}`)
		}
	}

	return (
		<Fragment>
			<div className="myCollections__collections">
				{props.collectionsList}
			</div>
			<form
				onSubmit={(e) => onSubmit(e)}
				className="myCollections__pages"
			>
				<div className="myCollections__pages__prev">
					<img
						className="myCollections__pages__prev__icon"
						src={left_arrow}
						alt="left arrow"
						onClick={prev}
					/>
				</div>
				<div className="myCollections__pages__inputPage__wrapper">
					<input
						className="myCollections__pages__inputPage"
						type="number"
						required
						name="page"
						min="1"
						max={props.maxPage}
					/>
				</div>
				<div className="myCollections__pages__button__wrapper">
					<button
						className="myCollections__pages__button"
						type="submit"
					>
						<img
							className="myCollections__pages__button__icon"
							src={search}
							alt="search icon"
						/>
					</button>
					<span className="myCollections__pages__button__text">
						{props.page}/{props.maxPage}
					</span>
				</div>
				<div className="myCollections__pages__next">
					<img
						className="myCollections__pages__next__icon"
						src={right_arrow}
						alt="left arrow"
						onClick={next}
					/>
				</div>
			</form>
		</Fragment>
	)
}

export default Collections
