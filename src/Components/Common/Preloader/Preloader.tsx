import React from 'react'
import classes from './Preloader.module.css'
import preloader from '../../../Assets/Common/preloader.svg'

const Prealoder = () => {
    return(
        <div className={classes.main}>
            <img src={preloader} alt='preloader'/>
        </div>
    )
}

export default Prealoder