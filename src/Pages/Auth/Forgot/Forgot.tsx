import React from 'react'
import { connect } from 'react-redux'
import classes from '../Auth.module.css'

const Forgot = () => {
    return(
        <div className={classes.main}>
            <h2>Forgot</h2>
        </div>
    )
}

export default connect()(Forgot)