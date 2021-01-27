import React, { useState } from 'react'
import './NotAuthenticatedHeader.scss'
import { connect } from 'react-redux'
import logo from '../../../../assets/Images/logo.png'
import reg from '../../../../assets/Images/reg.png'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import Registration from '../../components/Registration/Registration'
import { setupInputLoginStyle } from '../../../../helpers/setupStyles/inputStyles'
import { logout, login } from '../../../../redux/actions/auth'
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock'

const NotAuthenticatedHeader = ({ login, logout }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	let [regIsHidden, regSetHidden] = useState(true)

	const { username, password } = formData

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const onChangeHidden = () => {
		regSetHidden(!regIsHidden)
	}

	let renderedRegistration = <Registration isHidden={regIsHidden} />

	const onSubmit = (e) => {
		e.preventDefault()
		login(formData)
	}

	let inputStyle = setupInputLoginStyle()

	return (
		<div className="header__notAuth__usable">
			<div className="header__notAuth__usable__logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="header__notAuth__usable__registration">
				<img
					className="header__notAuth__usable__registration__image"
					src={reg}
					alt="reg"
					onClick={onChangeHidden}
				/>
				{renderedRegistration}
			</div>
			<form
				onSubmit={(e) => onSubmit(e)}
				id="login"
				className="header__notAuth__usable__form"
			>
				<div className="header__notAuth__usable__username">
					<Input
						style={inputStyle}
						value={username}
						name="username"
						maxLength="14"
						type="text"
						placeholder="Username"
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="header__notAuth__usable__password">
					<Input
						style={inputStyle}
						value={password}
						name="password"
						maxLength="20"
						type="password"
						placeholder="Password"
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="header__notAuth__usable__button">
					<Button
						form="login"
						className="header__button"
						type="submit"
						text="Sign in"
					/>
				</div>
				<ErrorBlock
					type="login"
					className="header__notAuth__usable__error"
				/>
			</form>
			{/* <button onClick={logout}>LOGOUT</button> */}
		</div>
	)
}

export default connect(null, { login, logout })(NotAuthenticatedHeader)
