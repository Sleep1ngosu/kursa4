import React from 'react'
import './Block.scss'
import { setupInputRegistrationStyle } from '../../../../../helpers/setupStyles/inputStyles'
import { Input } from '../../Input/Input'

const Block = (props) => {
	let inputStyle = setupInputRegistrationStyle()

	return (
		<div className="registration__block">
			<div className="registration__block__label">{`${props.label}:`}</div>
			<div className="registration__block__input">
				<Input
					name={props.name}
					value={props.value}
					onChange={(e) => props.onChange(e)}
					style={inputStyle}
					type={props.type}
					maxLength={props.maxLength}
				/>
			</div>
		</div>
	)
}

export { Block }
