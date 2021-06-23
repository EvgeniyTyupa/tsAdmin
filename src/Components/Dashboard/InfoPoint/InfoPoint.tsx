import React from 'react'
import classes from './InfoPoint.module.css'

interface InfoPointProps {
    label: string
    info: string | number
}

const InfoPoint = ({ label, info }: InfoPointProps) => {
    return(
        <div className={classes.main}>
            <label>{label}</label>
            <div className={classes.infoBlock}>
                <span>{info}</span>
            </div>
        </div>
    )
}

export default InfoPoint