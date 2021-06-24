import React from 'react'
import classes from './Rating.module.css'

interface Position {
    title: string
}

interface RatingProps {
    items: Position[]
    title: string
}

const Rating = ({ items, title }: RatingProps) => {
    return(
        <div className={classes.main}>
           <h5>{title}</h5> 
           <ol>
               {items.map(item => <li key={item.title}>{item.title}</li>)}
           </ol>
        </div>
    )
}

export default Rating