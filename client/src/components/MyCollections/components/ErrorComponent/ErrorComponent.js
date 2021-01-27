import React from 'react'
import './ErrorComponent.scss'

const ErrorComponent = (props) => (
	<div className="myCollections__notFound">{props.errorMessage}</div>
)

export default ErrorComponent
