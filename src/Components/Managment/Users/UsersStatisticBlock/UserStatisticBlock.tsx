import React from 'react'
import classes from './UserStatisticBlock.module.css'

interface UserStatisticBlockProps {
    label: string
    data: string | number | null
}

const UserStatisticBlock = ({ label, data }: UserStatisticBlockProps) => {
    return(
        <div className={classes.main}>
            <p>
                {label}: {data}
            </p>
        </div>
    )
}

export default UserStatisticBlock