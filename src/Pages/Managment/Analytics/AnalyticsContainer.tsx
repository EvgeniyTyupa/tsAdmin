import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import Analytics from './Analytics'

const AnalyticsContainer = () => {
    return(
        <Analytics/>
    )
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {
    
})(AnalyticsContainer)