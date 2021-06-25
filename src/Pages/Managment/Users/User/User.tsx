import React from 'react'
import { Button, Card, Table, Tabs } from 'antd'
import Chart from '../../../../Components/Chart/Chart'
import Layout from '../../../../Components/Layout/Layout'
import UsersProfile from '../../../../Components/Managment/Users/UsersProfile'
import UserStatisticBlock from '../../../../Components/Managment/Users/UsersStatisticBlock/UserStatisticBlock'
import classes from './User.module.css'
import { cx } from '../../../../Utils/classnames'
import { useUserTableColumns } from './useUserTableColumns'
import { useTranslation } from 'react-i18next'
import Breadcrumb, { BreadcrumbPath } from '../../../../Components/Layout/Breadcrumb/Breadcrumb'
import { ManagmentUser } from '../../../../Redux/Managment/Users/usersTypes'
import SendPushModal from '../../../../Components/Managment/Users/SendPushModal/SendPushModal'

interface UserProps {
    user: ManagmentUser | null
    isOpenSendPushModal: boolean
    handleSendPushModal: () => void
}

const User = ({ user, isOpenSendPushModal, handleSendPushModal }: UserProps) => {
    const { t } = useTranslation()

    const columns = useUserTableColumns()

    const routes: BreadcrumbPath[] = [
        {
            title: "User",
            path: `/users/`
        },
        {
            title: user ? user?.first_name + " " + user?.last_name : "User",
            path: `/users/${user?.id}`
        }
    ]

    return(
        <Layout>
            <div>
                <Breadcrumb routes={routes}/>
                {isOpenSendPushModal && <SendPushModal handleModal={handleSendPushModal}/>}
                <Card className={classes.main}>
                    <div className={classes.topInfo}>
                        <UsersProfile user={user}/>
                        <Button type="primary" onClick={handleSendPushModal}>Send Push</Button>
                    </div>
                    {user && 
                    <div className={classes.points}>
                        <UserStatisticBlock label="Points" data={user?.points}/>
                        <UserStatisticBlock label="Level" data={user.level.name}/>
                        <UserStatisticBlock label="Spent" data={"GEL"}/>
                        <UserStatisticBlock label="Spent Points" data={user.points_spent}/>
                    </div>}
                    <div className={classes.charts}>
                        <div className={cx(classes.chart, classes.pieChart)}>
                            <Chart type={"pie"} label={"Visited Stores"}/>
                        </div>
                        <div className={cx(classes.chart, classes.barChart)}>
                            <Chart type={"bar"} label={"Purchases by month"}/>
                        </div>
                    </div>
                    <div className={classes.table}>
                        <div className={classes.tabs}>
                            <Tabs defaultActiveKey="1">
                                <Tabs.TabPane tab="Purchases" key="1">
                                    <span>Purchases</span>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Last Logins" key="2">
                                    <span>Last Logins</span>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Offer Tickets" key="3">
                                    <span>Offer Tickets</span>
                                </Tabs.TabPane>
                            </Tabs>
                        </div>
                        <Table columns={columns}/>
                    </div>
                </Card>
            </div>
            
        </Layout>
    )
}

export default User