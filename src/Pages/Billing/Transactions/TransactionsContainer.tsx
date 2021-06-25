import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import Transactions from './Transactions'

const TransactionsContainer = () => {
    return(
        <Transactions/>
    )
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {
    
})(TransactionsContainer)