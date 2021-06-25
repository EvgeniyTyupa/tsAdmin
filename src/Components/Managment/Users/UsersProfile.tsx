import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import classes from './UsersProfile.module.css'

const UsersProfile = () => {
    return(
        <div className={classes.main}>
            <Avatar size={120}/>
            <div className={classes.info}>
                <label>Name: </label>
                <label>ID: </label>
                <label>Registration Type: </label>
                <label>Email: </label>
                <label>Last Visit: </label>
            </div>
        </div>
    )
}

export default UsersProfile