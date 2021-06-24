import { Divider, Menu } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Sidebar.module.css'

interface SidebarProps {
    menuItemsList: any
    isCollapsed: boolean
}

const Siderbar = ({ menuItemsList, isCollapsed }: SidebarProps) => {
    return(
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} className={classes.menu}>
            {menuItemsList.map((item: any, index: number) => {
                return(
                    <>
                        {(isCollapsed && index > 0) ? 
                            <Divider className={classes.divider}/>
                        :
                            (index > 0 && <label className={classes.label}>{item.title}</label>) }
                        {
                            item.items.map((itemMenu: any) => {
                                return(
                                    <Menu.Item key={itemMenu.id} className={classes.menuItem}>
                                        <NavLink to={itemMenu.path}>
                                            {React.createElement(itemMenu.icon, {
                                                className: classes.iconMenu
                                            })}
                                             <span>{itemMenu.text}</span>
                                        </NavLink>
                                    </Menu.Item>
                                )
                            })
                        }
                    </>
                    
                )
            }
                
            )}
            <Menu.Item key="logout">
                
            </Menu.Item>
        </Menu>
    )
}

export default Siderbar