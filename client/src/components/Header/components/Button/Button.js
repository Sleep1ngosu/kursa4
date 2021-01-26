import React from 'react'
import './Button.scss'

const Button = (props) => {
	return (
		<button form={props.form} className={props.className} type={props.type}>
			{props.text}
		</button>
	)
}

export { Button }
