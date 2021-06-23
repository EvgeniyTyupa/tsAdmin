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
    routes: BreadcrumbPath[]
}

const Breadcrumb = ({ routes }: BreadcrumbProps) => {

    return(
        <div className={classes.main}>
            <AntBreadcrumb separator="/">
                <AntBreadcrumb.Item>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </AntBreadcrumb.Item>
                {routes.map(item => (
                    <AntBreadcrumb.Item key={item.path}>
                        <NavLink to={`${item.path}`}>{item.title}</NavLink>
                    </AntBreadcrumb.Item>
                ))}
            </AntBreadcrumb>
            <h2>
                <NavLink to={routes.length > 1 ? routes[routes.length - 2].path : "/dashboard"} className={classes.arrowLink}>
                    <ArrowLeftOutlined /> &nbsp;
                </NavLink>
                <span>{routes[routes.length-1].title}</span>
            </h2>
        </div>
       
    )
}

export default Breadcrumb