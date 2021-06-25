import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import Events from './Events'

const EventsContainer = () => {
    return(
        <Events/>
    )
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {
    
})(EventsContainer)