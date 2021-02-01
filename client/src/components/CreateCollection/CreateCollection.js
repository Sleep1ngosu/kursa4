import React, { useState, useCallback } from 'react'
import './CreateCollection.scss'
import { connect } from 'react-redux'
import Title from './components/Title/Title'
import Close from './components/Close/Close'
import Input from './components/Input/Input'
import Image from './components/Image/Image'
import SelectInput from './components/SelectInput/SelectInput'
import Button from './components/Button/Button'
import { removeBlocker } from '../../redux/actions/blocker'
import { hideCreateCollection } from '../../redux/actions/createCollection'
import upload from '../../assets/Icons/upload.png'
import { createNewCollection } from '../../redux/actions/createCollection'
import ErrorBlock from './components/ErrorBlock/ErrorBlock'

const CreateCollection = (props) => {
	const style = (props.createCollection.isShow && { display: 'block' }) || {
		display: 'none',
	}

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		topic: [],
	})
	const [image, setImage] = useState({})

	console.log(image)
	const [renderedIcon, setRenderedIcon] = useState(upload)

	const onClose = () => {
		console.log('onClose has been worked')
		setFormData({ title: '', description: '', image: '', topic: [] })
		setImage({})
		setRenderedIcon(upload)
		props.hideCreateCollection()
		props.removeBlocker()
	}

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		console.log(formData)
		props.createNewCollection(image, formData)
	}

	return (
		<div style={style} className="createCollection__wrapper">
			<form onSubmit={(e) => onSubmit(e)} className="createCollection">
				<ErrorBlock />
				<Title />
				<Close onClick={onClose} />
				<div className="createCollection__inputSide">
					<Input
						name="title"
						value={formData.title}
						onChange={(e) => onChange(e)}
						placeholder="Title..."
					/>
					<SelectInput formData={formData} setValue={setFormData} />
					<textarea
						maxLength="300"
						className="createCollection__inputSide__textarea"
						placeholder="Description..."
						name="description"
						value={formData.description}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="createCollection__image">
					<Image
						// renderedIcon={renderedIcon}
						// setRenderedIcon={setRenderedIcon}
						image={image}
						setImage={setImage}
						// value={formData}
						// setValue={setFormData}
					/>
					<Button />
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		createCollection: state.createCollection,
	}
}

export default connect(mapStateToProps, {
	removeBlocker,
	hideCreateCollection,
	createNewCollection,
})(CreateCollection)
