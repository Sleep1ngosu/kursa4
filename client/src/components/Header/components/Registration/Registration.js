import React, { useState } from 'react'
import './Registration.scss'
import { connect } from 'react-redux'
import { setupRegistrationInputList } from '../../../../helpers/lists/setupRegistrationInputList'
import { Button } from '../Button/Button'
import facebook from '../../../../assets/Icons/facebook.png'
import github from '../../../../assets/Icons/github.png'
import gmail from '../../../../assets/Icons/gmail.png'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { signup } from '../../../../redux/actions/auth'
import { setErrorRegistrationAlert } from '../../../../redux/actions/alert'
import ErrorBlock from '../ErrorBlock/ErrorBlock'

const Registration = (props) => {
	let [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	})

	let registrationClass =
		(props.isHidden && 'registration__notActive') || 'registration__active'

	const onSubmit = (e) => {
		e.preventDefault()
		if (formData.password !== formData.password2) {
			props.setErrorRegistrationAlert('password do not match')
			console.log('password do not match')
		} else {
			props.signup(formData)
			// window.location.reload()
		}
	}

	let blocksList = setupRegistrationInputList(formData, setFormData)

	const loginFacebook = (response) => {
		console.log(response)
	}

	const loginGoogle = (response) => {
		console.log(response)
	}

	return (
		<form
			id="registration"
			onSubmit={(e) => onSubmit(e)}
			className={`registration ${registrationClass}`}
		>
			<div className="registration__title">
				So you can create your own account now!
			</div>
			{blocksList}
			<div className="registration__button__wrapper">
				<Button
					form="registration"
					type="submit"
					className="registration__button"
					text="Sign up"
				/>
			</div>
			<div>
				<ErrorBlock
					type="registration"
					className="registration__alertMessage"
				/>
			</div>
			<div className="registration__social-network-list">
				<div className="registration__social-network-list__title">
					or sign in using:
				</div>
				<div className="registration__social-network-list__facebook">
					{/* <FacebookLogin
						appId="418769056118651"
						fields="name,email,picture"
						callback={loginFacebook}
						render={(renderProps) => (
							<img
								className="facebook__icon"
								src={facebook}
								alt="facebook"
								onClick={renderProps.onClick}
							/>
						)}
					/> */}
				</div>
				<div className="registration__social-network-list__gmail">
					{/* <img className="gmail__icon" src={gmail} alt="gmail" /> */}
					{/* <GoogleLogin
						appId="418769056118651"
						onSuccess={loginGoogle}
						onFailure={loginGoogle}
						render={(renderProps) => (
							<img
								className="gmail__icon"
								src={gmail}
								alt="gmail"
								onClick={renderProps.onClick}
							/>
						)}
					/> */}
				</div>
			</div>
		</form>
	)
}

export default connect(null, { signup, setErrorRegistrationAlert })(
	Registration
)
