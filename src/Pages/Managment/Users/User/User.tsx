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
import { BreadcrumbPath } from '../../../../Components/Layout/Breadcrumb/Breadcrumb'
import { ManagmentUser } from '../../../../Redux/Managment/Users/usersTypes'

interface UserProps {
    user: ManagmentUser | null
}

const User = ({ user }: UserProps) => {
    const { t } = useTranslation()

    const columns = useUserTableColumns()

    const routes: BreadcrumbPath[] = [
        {
            title: "User",
            path: `/users/`
        }
    ]

    return(
        <Layout>
            <Card className={classes.main}>
                <div className={classes.topInfo}>
                    <UsersProfile/>
                    <Button type="primary">Send Push</Button>
                </div>
                <div className={classes.points}>
                    <UserStatisticBlock label="Points" data={5454}/>
                    <UserStatisticBlock label="Level" data={"Silver"}/>
                    <UserStatisticBlock label="Spent" data={"GEL"}/>
                    <UserStatisticBlock label="Spent Points" data={0}/>
                </div>
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
        </Layout>
    )
}

export default User