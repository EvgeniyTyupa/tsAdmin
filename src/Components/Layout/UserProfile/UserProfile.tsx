import React from 'react'
import classes from './UserProfile.module.css'
import { User } from '../../../Redux/User/userTypes'
import { Avatar, Button, Dropdown, Image, Menu } from 'antd'
import { useTranslation } from 'react-i18next'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

interface UserProfileProps {
    user: User | null
    logout: () => void
}

const UserProfile = ({ user, logout }: UserProfileProps) => {
    const { t } = useTranslation()

    const menu = (
        <Menu>
            <Menu.Item key="menu1">
                <Button className={classes.menuBut}>
                    <NavLink to="/profile">
                        <UserOutlined style={{ marginRight: 8 }}/>
                        {t("menu.profile")}
                    </NavLink>
                </Button>
            </Menu.Item>
            <Menu.Item key="menu2">
                <Button icon={<LogoutOutlined />} onClick={() => logout()} className={classes.menuBut}>{t("menu.logout")}</Button>
            </Menu.Item>
        </Menu>
    )

    return(
        <div className={classes.main}>
            {user && 
            <Dropdown overlay={menu} className={classes.user}>
                <Button className={classes.userButton}>
                    {user.avatar  
                        ? <Avatar
                            src={<Image src={user.avatar}/>}
                        /> 
                        : 
                        <Avatar size={25}>
                            {user.first_name.charAt(0).toUpperCase() + user.last_name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    <span className={classes.userName}>{user.first_name} {user.last_name}</span>
                </Button>
                
            </Dropdown>}
        </div>
    )
}

export default UserProfile