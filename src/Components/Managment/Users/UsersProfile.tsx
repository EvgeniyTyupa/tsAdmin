import { Avatar, Image } from 'antd'
import React from 'react'
import { ManagmentUser } from '../../../Redux/Managment/Users/usersTypes'
import { getTimeByTimeZone } from '../../../Utils/timezone'
import classes from './UsersProfile.module.css'

interface UserProps {
    user: ManagmentUser | null
}

const UsersProfile = ({ user }: UserProps) => {
    return(
        <div className={classes.main}>
            <Avatar size={120} src={<Image src={user?.avatar}/>}/>
            <div className={classes.info}>
                <div className={classes.field}>
                    <label>Name: </label>
                    <span>{user?.first_name} {user?.last_name}</span>
                </div>
                <div className={classes.field}>
                    <label>ID: </label>
                    <span>{user?.id}</span>
                </div>
                <div className={classes.field}>
                    <label>Registration Type: </label>
                    <span>{user?.is_verified ? "Full" : "Partial"}</span>
                </div>
                <div className={classes.field}>
                    <label>Email: </label>
                    <span>{user?.email}</span>
                </div>
                <div className={classes.field}>
                    <label>Last Visit: </label>
                    <span>{user && getTimeByTimeZone(user?.last_visited_at)}</span>
                </div>                
            </div>
        </div>
    )
}

export default UsersProfile