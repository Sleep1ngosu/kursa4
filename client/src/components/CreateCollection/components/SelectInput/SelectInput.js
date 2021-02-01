import React from 'react'
import './SelectInput.scss'
import Select from 'react-dropdown-select'
import styled from '@emotion/styled'
import { topics } from '../../../../consts/topics'

const SelectInput = ({ formData, setValue }) => {
	let options = topics
	const onChange = (value) => {
		setValue({ ...formData, topic: value })
	}

	const StyledSelect = styled(Select)`
		background: #fff;
		border: #fff !important;
		width: 30rem;
		border-radius: 0.5rem;
		font-size: 1.5rem;
		padding-left: 1rem;
		font-size: 1.6rem;
		font-family: 'Lato', sans-serif;

		.react-dropdown-select-clear,
		.react-dropdown-select-dropdown-handle {
			color: black;
		}
		.react-dropdown-select-option {
			border: 1px solid #fff;
		}
		.react-dropdown-select-item {
			color: black;
			background-color: gray;
		}
		.react-dropdown-select-input {
			color: black;
			font-size: 1.5rem;
		}
		.react-dropdown-select-dropdown {
			position: absolute;
			left: 0;
			border: none;
			width: 30rem;
			padding: 0;
			display: flex;
			flex-direction: column;
			border-radius: 2px;
			max-height: 25rem;
			overflow: auto;
			z-index: 9;
			background: white;
			box-shadow: none;
			color: black !important;
			font-size: 1.6rem;
			font-family: 'Lato', sans-serif;
		}
		.react-dropdown-select-item {
			color: black;
			height: 4rem;
			padding-left: 2rem;
			font-size: 1.6rem;
			font-family: 'Lato', sans-serif;
			background-color: white;

			:hover {
				background-color: #c4c4c4 !important;
			}
		}
		.react-dropdown-select-item.react-dropdown-select-item-selected,
		.react-dropdown-select-item.react-dropdown-select-item-active {
			color: black;
			background-color: white;
		}
		.react-dropdown-select-item.react-dropdown-select-item-disabled {
			color: #ccc;
		}
	`

	return (
		<StyledSelect
			disabledLabel
			required
			closeOnSelect
			values={formData.topic}
			placeholder="Topic..."
			options={options}
			onChange={(value) => onChange(value)}
		/>
	)
}

export default SelectInput
