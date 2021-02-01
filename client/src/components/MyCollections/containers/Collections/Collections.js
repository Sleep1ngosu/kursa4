import React, { useState, Fragment } from 'react'
import './Collections.scss'
import left_arrow from '../../../../assets/Icons/left_arrow.png'
import right_arrow from '../../../../assets/Icons/right_arrow.png'
import search from '../../../../assets/Icons/search.png'
import history from '../../../../history/history'
import PrevPage from './components/PrevPage/PrevPage'
import NextPage from './components/NextPage/NextPage'
import InputPage from './components/InputPage/InputPage'
import Button from './components/Button/Button'

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
				<PrevPage icon={left_arrow} onClick={prev} />
				<InputPage max={props.maxPage} />
				<Button page={props.page} maxPage={props.maxPage} />
				<NextPage icon={right_arrow} onClick={next} />
			</form>
		</Fragment>
	)
}

export default Collections
