import React from 'react'
import Layout from '../../../Components/Layout/Layout'
import classes from './Users.module.css'
import { useUsersTableColumns } from './useUsersTableCoumns'
import { Card, Table } from 'antd'
import { ManagmentUser } from '../../../Redux/Managment/Users/usersTypes'
import Breadcrumb, { BreadcrumbPath } from '../../../Components/Layout/Breadcrumb/Breadcrumb'
import { useTranslation } from 'react-i18next'
import DeleteModal from '../../../Components/Common/DeleteModal/DeleteModal'

interface UsersProps {
    users: ManagmentUser[]
    total: number
    limit: number
    handleDeleteUser: (userId: string) => void
    handleOpenDeleteModal: (user: ManagmentUser | null) => void
    isOpenDeleteModal: boolean
    userToAction: ManagmentUser | null
}

const Users = ({ users, total, limit, handleDeleteUser, handleOpenDeleteModal, isOpenDeleteModal, userToAction }: UsersProps) => {
    const { t } = useTranslation()

    const columns = useUsersTableColumns(handleOpenDeleteModal)

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
                    { (isOpenDeleteModal && userToAction ) && <DeleteModal deleteAction={handleDeleteUser} closeModal={handleOpenDeleteModal} itemId={userToAction?.id}/>}
                    <Table 
                        columns={columns} 
                        dataSource={users}
                        pagination={{
                            defaultPageSize: limit,
                            total: total,
                            showSizeChanger: true,
                            pageSizeOptions: ['10', '25', '50', '100']
                        }}
                    />
                </Card>
            </div>
        </Layout>
    )
}

export default Users