import React, { Fragment, useState, useEffect } from 'react'
import './MyCollections.scss'
import { connect } from 'react-redux'
import { getCollectionsByPage } from '../../api/getCollectionsByPage'
import { setupMyCollectionsList } from '../../helpers/lists/setupMyCollectionsList'
import addIcon from '../../assets/Icons/add.png'
import ErrorComponent from './components/ErrorComponent/ErrorComponent'
import Collections from './containers/Collections/Collections'

const MyCollections = (props) => {
	const [collections, setColletcions] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [maxPage, setMaxPage] = useState(null)
	let [page, setPage] = useState(
		window.location.pathname.split('/')[
			window.location.pathname.split('/').length - 1
		]
	)

	if (!+page) {
		setPage(1)
	}

	useEffect(() => {
		const fetchData = async () => {
			if (props.username) {
				let response = await getCollectionsByPage(props.username, page)
				if (response.status === 200) {
					setColletcions(response.data.collections)
					setMaxPage(response.data.pages)
				} else if (response.status === 404) {
					setErrorMessage(response.data.message)
				}
			}
		}
		fetchData()
	}, [props.username, page])

	let collectionsList = []
	if (collections) {
		collectionsList = setupMyCollectionsList(collections)
	}

	let renderedComponent
	if (collections) {
		renderedComponent = (
			<Collections
				collectionsList={collectionsList}
				maxPage={maxPage}
				page={page}
				setPage={setPage}
			/>
		)
	} else if (errorMessage) {
		renderedComponent = <ErrorComponent errorMessage={errorMessage} />
	} else renderedComponent = null

	return (
		<div className="myCollections__wrapper">
			<div className="myCollections__title">
				<div className="myCollections__title__text">
					My Collections:
				</div>
				<div className="myCollections__title__icon">
					<img
						className="myCollections__title__icon__icon"
						src={addIcon}
						alt="add icon"
					/>
				</div>
			</div>
			{renderedComponent}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.user.user.username,
	}
}

export default connect(mapStateToProps, null)(MyCollections)
