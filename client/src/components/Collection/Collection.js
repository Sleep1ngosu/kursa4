import React, { useState, useEffect, useCallback, useMemo } from 'react'
import './Collection.scss'
import { connect } from 'react-redux'
import { getCurrentCollection } from '../../redux/actions/collection'
import OwnerCollection from './OwnerCollection/OwnerCollection'

const Collection = (props) => {
	return (
		<div className="collection__wrapper">
			<OwnerCollection />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.user.user.username,
		role: state.user.user.role,
	}
}

export default connect(mapStateToProps, { getCurrentCollection })(Collection)
