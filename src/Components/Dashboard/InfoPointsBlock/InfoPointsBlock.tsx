import React from 'react'
import InfoPoint from '../InfoPoint/InfoPoint'
import { InfoPointProps } from '../InfoPoint/InfoPoint'
import classes from './InfoPointsBlock.module.css'

interface InfoPointsBlockProps {
    points: InfoPointProps[]
}

const InfoPointsBlock = ({ points }: InfoPointsBlockProps) => {
    return(
        <div className={classes.main}>
            {points.map((item, index) => (
                <InfoPoint {...item} key={item.label + index}/>
            ))}
        </div>
    )
}

export default InfoPointsBlock