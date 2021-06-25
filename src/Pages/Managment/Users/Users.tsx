import React from 'react'
import Layout from '../../../Components/Layout/Layout'
import classes from './Users.module.css'
import { useUsersTableColumns } from './useUsersTableCoumns'
import { Card, Table } from 'antd'
import { ManagmentUser } from '../../../Redux/Managment/Users/usersTypes'
import { NavLink } from 'react-router-dom'
import Breadcrumb, { BreadcrumbPath } from '../../../Components/Layout/Breadcrumb/Breadcrumb'
import { useTranslation } from 'react-i18next'

interface UsersProps {
    users: ManagmentUser[]
    total: number
}

const Users = ({ users, total }: UsersProps) => {
    const { t } = useTranslation()

    const columns = useUsersTableColumns()

    const routes: BreadcrumbPath[] = [
        {
            title: t("menu.managment.users"),
            path: "/users"
        }
    ]

    return(
        <Layout>
            <div>
                <Breadcrumb routes={routes}/>
                <Card className={classes.main}>
                    <NavLink to="/users/1187c953-fd3d-46b2-a761-320cfe2189ae">Test Users</NavLink>
                    <Table columns={columns} dataSource={users}/>
                </Card>
            </div>
        </Layout>
    )
}

export default Users