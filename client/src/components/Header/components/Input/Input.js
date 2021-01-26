import React from 'react'

const Input = (props) => {
	return (
		<input
			style={props.style}
			name={props.name}
			value={props.value}
			onChange={(e) => props.onChange(e)}
			placeholder={props.placeholder}
			type={props.type}
			maxLength={props.maxLength}
			required
		/>
	)
}

export { Input }
