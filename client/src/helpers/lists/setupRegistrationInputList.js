import { Block } from '../../components/Header/components/Registration/Block/Block'

export const setupRegistrationInputList = (formData, setFormData) => {
	let labels = ['Username', 'Email', 'Password', 'Password']
	let names = ['username', 'email', 'password', 'password2']
	let types = ['text', 'email', 'password', 'password']
	let maxLengths = ['14', '40', '20', '20']

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const listBlock = labels.map((e, i) => {
		return (
			<Block
				onChange={(e) => onChange(e)}
				value={formData[labels[i]]}
				name={names[i]}
				key={`registration__block__${i}`}
				label={e}
				type={types[i]}
				maxLength={maxLengths[i]}
			/>
		)
	})

	return listBlock
}
