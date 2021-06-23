import React from 'react'
import classes from './Breadcrumb.module.css'
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

export interface BreadcrumbPath {
    title: string
    path: string
}

interface BreadcrumbProps {
    routes?: BreadcrumbPath[]
    title?: string
}

const Breadcrumb = ({ routes, title }: BreadcrumbProps) => {

    return(
        <div className={classes.main}>
            <AntBreadcrumb separator="/">
                <AntBreadcrumb.Item>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </AntBreadcrumb.Item>
                {routes && routes.map(item => (
                    <AntBreadcrumb.Item key={item.path}>
                        <NavLink to={`${item.path}`}>{item.title}</NavLink>
                    </AntBreadcrumb.Item>
                ))}
            </AntBreadcrumb>
            <h2>
                <NavLink to={routes ? (routes.length > 1 ? routes[routes.length - 2].path : "/dashboard") : "/dashboard"} className={classes.arrowLink}>
                    <ArrowLeftOutlined /> &nbsp;
                </NavLink>
                <span>{routes ? routes[routes.length-1].title : (title && title)}</span>
            </h2>
        </div>
       
    )
}

export default Breadcrumb