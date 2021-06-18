import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../Redux/reduxStore'
import Level from './Level'

const LevelContainer = () => {
    return(
        <>
            <Level/>
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {})(LevelContainer)