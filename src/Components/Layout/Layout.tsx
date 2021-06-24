import React, { useState } from 'react'
import { Layout as AntLayout, Menu, Breadcrumb, Button, Divider } from 'antd'
import classes from './Layout.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { logout } from '../../Redux/User/userReducer'
import { useMenuItems } from './menuItems'

import logo from '../../Assets/Common/logo.png'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { AppStateType } from '../../Redux/reduxStore'
import UserProfile from './UserProfile/UserProfile'
import { User } from '../../Redux/User/userTypes'
import Siderbar from './Sidebar/Sidebar'

interface LayoutProps {
    children: React.ReactElement,
    user: User | null
    logout: () => void
}

const { Header, Content, Footer, Sider } = AntLayout
const { SubMenu } = Menu

const Layout = ({ children, user, logout }: LayoutProps) => {
    const { t } = useTranslation()

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    

    const menuItemsList = useMenuItems()

    return(
        <AntLayout className={classes.main}>
            <Sider collapsible collapsed={isCollapsed} trigger={null}>
                <div className={classes.logo}>
                    <img src={logo}/>
                </div>
                <Siderbar menuItemsList={menuItemsList} isCollapsed={isCollapsed}/>
            </Sider>
            <AntLayout>
                <Header className={classes.header}>
                    {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: handleCollapse,
                    })}
                    <UserProfile user={user} logout={logout}/>
                </Header>
                <Content className={classes.content}>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    user: state.user.user
})

export default connect(mapStateToProps, {
    logout
})(Layout)