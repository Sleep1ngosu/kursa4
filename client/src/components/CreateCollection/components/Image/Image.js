import React, { useCallback, useState } from 'react'
import './Image.scss'
import { connect } from 'react-redux'
import upload from '../../../../assets/Icons/upload.png'
import { useDropzone } from 'react-dropzone'
import { checkImageType } from '../../../../helpers/dropImage/checkImageType'
import jpg from '../../../../assets/Icons/jpg.png'
import jpeg from '../../../../assets/Icons/jpeg.png'
import png from '../../../../assets/Icons/png.png'
// import { setImage } from '../../../../redux/actions/createCollection'

const Image = ({ image, setImage }) => {
	// const [image, setImage] = useState({})
	const [path, setPath] = useState(null)
	const [renderedIcon, setRenderedIcon] = useState(upload)

	const onDrop = useCallback((acceptedFile) => {
		if (acceptedFile.length === 1) {
			if (checkImageType(acceptedFile[0].type)) {
				setImage(acceptedFile[0])
				setPath(acceptedFile[0].path)
				if (
					acceptedFile[0].type === 'image/jpg' ||
					acceptedFile[0].type === 'image/jpeg'
				) {
					setRenderedIcon(jpg)
				} else {
					setRenderedIcon(png)
				}
			} else {
				setImage({ name: 'Incorrect format of image' })
				setRenderedIcon(upload)
			}
		} else {
			setImage('You should choose only one image')
		}
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	})

	return (
		<div className="image__wrapper">
			<div className="image__usable" {...getRootProps()}>
				<input className="image__icon" {...getInputProps()} />
				<img
					src={renderedIcon}
					alt="upload image"
					className="image__icon__icon"
				/>
			</div>
			<div className="image__title">
				<span className="image__title__text">{image.name}</span>
			</div>
		</div>
	)
}

export default Image
