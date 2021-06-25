import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import Offers from './Offers'

const OffersContainer = () => {
    return(
        <Offers/>
    )
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {
    
})(OffersContainer)