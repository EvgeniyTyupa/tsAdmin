import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../Redux/reduxStore'
import Dashboard from './Dashboard'

const DashboardContainer = () => {
    return(
        <Dashboard/>
    )
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {

})(DashboardContainer)