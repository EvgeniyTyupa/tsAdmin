import React, { useState } from 'react'
import { Layout as AntLayout, Menu, Breadcrumb, Button } from 'antd'
import classes from './Layout.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { logout } from '../../Redux/User/userReducer'
import { useMenuItems } from './menuItems'

import logo from '../../Assets/Common/logo.png'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

interface LayoutProps {
    children: React.ReactElement,
    logout: () => void
}

const { Header, Content, Footer, Sider } = AntLayout
const { SubMenu } = Menu

const Layout = ({ children, logout }: LayoutProps) => {
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                    {menuItemsList.map(item => (
                        <Menu.Item key={item.id}>
                            <NavLink to={item.path}>{item.text}</NavLink>
                        </Menu.Item>
                    ))}
                    <Menu.Item key="logout">
                        <Button onClick={() => logout()}>{t("menu.logout")}</Button>
                    </Menu.Item>
                </Menu>
            </Sider>
            <AntLayout>
                <Header className={classes.header}>
                    {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: handleCollapse,
                    })}
                </Header>
                <Content className={classes.content}>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    )
}

export default connect(null, {
    logout
})(Layout)