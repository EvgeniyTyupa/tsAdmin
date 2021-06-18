import React, { useState } from 'react'
import { Layout as AntLayout, Menu, Breadcrumb, Button } from 'antd'
import classes from './Layout.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { logout } from '../../Redux/User/userReducer'
import { useMenuItems } from './menuItems'

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
            <Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapse}>
                <Menu >
                    {menuItemsList.map(item => (
                        <Menu.Item key={item.text}>
                            <NavLink to={item.path}>{item.text}</NavLink>
                        </Menu.Item>
                    ))}
                    <Menu.Item>
                        <Button onClick={() => logout()}>{t("menu.logout")}</Button>
                    </Menu.Item>
                </Menu>
            </Sider>
            <AntLayout>
                <Content>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    )
}

export default connect(null, {
    logout
})(Layout)