import React from 'react'
import classes from './Dashboard.module.css'
import Layout from '../../Components/Layout/Layout'
import Breadcrumb from '../../Components/Layout/Breadcrumb/Breadcrumb'
import { InfoPointProps } from '../../Components/Dashboard/InfoPoint/InfoPoint'
import InfoPointsBlock from '../../Components/Dashboard/InfoPointsBlock/InfoPointsBlock'
import Rating from '../../Components/Dashboard/Rating/Rating'
import { Table } from 'antd'
import { useDashboardTableColumns } from './useDashboardTableColumns'
import TimeRangePicker from '../../Components/Dashboard/TimeRangePicker/TimeRangePicker'
import TimeRangeCustomPicker from '../../Components/Dashboard/TimeRangePicker/TimeRangeCustomPicker/TimeRangeCustomPicker'

interface DashboardProps {
    dateRange: string
    isOpenCustomRangeDateModal: boolean
    handleDateRange: (range: "today" | "yesterday" | "last 7 days" | "last 30 days" | "last 3 month" | "last 12 month" | "custom") => void
    handleOpenRangeModal: () => void
    dateRangeType: "today" | "yesterday" | "last 7 days" | "last 30 days" | "last 3 month" | "last 12 month" | "custom"
}


const Dashboard = ({ dateRange, isOpenCustomRangeDateModal, handleDateRange, handleOpenRangeModal, dateRangeType }: DashboardProps) => {
    const points: InfoPointProps[] = [
        {
            label: 'Total Users',
            info: 9000
        },
        {
            label: 'New Users',
            info: 423
        },
        {
            label: 'Sales',
            info: 423
        },
        {
            label: 'Sales Amount',
            info: 9344
        },
        {
            label: 'Parking Ocupancy',
            info: "242 / 300"
        },
        {
            label: 'Active Users Now',
            info: 44
        },
        {
            label: 'Points Generated',
            info: 5555
        },
        {
            label: 'Points Spent',
            info: 3254
        },
        {
            label: 'Sales',
            info: 423
        },
        {
            label: 'Sales Amount',
            info: 9344
        },
        {
            label: 'Average Check Size',
            info: 300
        },
    ]

    const positions = [
        {
            title: 'H&M'
        },
        {
            title: "Bershka"
        },
        {
            title: "Puma"
        },
        {
            title: "Adidas"
        },
        {
            title: "Prostor"
        }
    ]

    const columns = useDashboardTableColumns()

    console.log(dateRange)

    return(
        <Layout>
            <div className={classes.main}>
                <div className={classes.header}>
                    <Breadcrumb title={"Dashboard"}/>
                </div>
                <div className={classes.body}>
                    {isOpenCustomRangeDateModal && <TimeRangeCustomPicker handleOpenRangeModal={handleOpenRangeModal}/>}
                    <h1>MALL</h1>
                    <div className={classes.content}>
                        <div className={classes.mainSide}>
                            <InfoPointsBlock points={points}/>
                            <Table columns={columns} className={classes.table}/>
                        </div>
                        <div className={classes.ratingBlock}>
                            <TimeRangePicker className={classes.timePicker} handleDateRange={handleDateRange} dateRangeType={dateRangeType}/>
                            <Rating items={positions} title="Last 15 Sales" key="last"/>
                            <Rating items={positions} title="Top 10 Best Sellers" key="top"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard