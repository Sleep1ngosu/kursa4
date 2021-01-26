import React, { useState } from 'react'
import './AuthenticatedHeader.scss'
import { connect } from 'react-redux'
import logo from '../../../../assets/Images/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import profileIcon from '../../../../assets/Icons/profile.png'
import ProfileList from '../../components/ProfileList/ProfileList'

const AuthenticatedHeader = (props) => {
	const [isProfileDropdown, setProfileDropdown] = useState(false)

	let profileDropdownStyle = (isProfileDropdown && { display: 'grid' }) || {
		display: 'none',
	}

	const toggleProfileDropdown = () => {
		setProfileDropdown(!isProfileDropdown)
	}

	return (
		<div className="header__auth__usable">
			<div className="header__auth__usable__logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="header__auth__usable__news header__auth__usable__text">
				News
			</div>
			<div className="header__auth__usable__myCollections header__auth__usable__text">
				My collections
			</div>
			<div className="header__auth__usable__search">
				<div className="header__auth__usable__search__wrapper">
					<input
						className="header__auth__usable__search__bar"
						type="text"
					/>
					<div className="header__auth__usable__search__icon">
						<SearchIcon />
					</div>
				</div>
			</div>
			<div className="header__auth__usable__profile__wrapper">
				<div
					onClick={toggleProfileDropdown}
					className="header__auth__usable__profile"
				>
					<img
						className="header__auth__usable__profile__icon"
						src={profileIcon}
						alt="profile icon"
					/>
				</div>
				<ProfileList style={profileDropdownStyle} />
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.user.user.username,
	}
}

export default connect(mapStateToProps, null)(AuthenticatedHeader)
