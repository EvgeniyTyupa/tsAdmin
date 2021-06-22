import React from 'react'
import classes from './UserProfile.module.css'
import { User } from '../../../Redux/User/userTypes'
import { Avatar, Image } from 'antd'

interface UserProfileProps {
    user: User | null
}

const UserProfile = ({ user }: UserProfileProps) => {
    return(
        <div className={classes.main}>
            {user && 
            <div className={classes.user}>
                {user.avatar  
                    ? <Avatar
                        src={<Image src={user.avatar}/>}
                    /> 
                    : 
                    <Avatar>
                        {user.first_name.charAt(0).toUpperCase() + user.last_name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                <span className={classes.userName}>{user.first_name} {user.last_name}</span>
            </div>}
        </div>
    )
}

export default UserProfile