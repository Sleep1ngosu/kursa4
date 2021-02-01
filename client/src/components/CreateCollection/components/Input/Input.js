import React from 'react'
import './Input.scss'

const Input = (props) => {
	return (
		<div className="createCollection__input__wrapper">
			<input
				className="createCollection__input"
				type={props.type}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
				disabled={props.disabled}
			/>
		</div>
	)
}

export default Input
