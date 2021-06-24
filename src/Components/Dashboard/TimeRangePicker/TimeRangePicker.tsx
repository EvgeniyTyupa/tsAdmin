import React from 'react'
import classes from './TimeRangePicker.module.css'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'
import { cx } from '../../../Utils/classnames'

interface TimeRangePickerProps {
    handleDateRange: (range: "today" | "yesterday" | "last 7 days" | "last 30 days" | "last 3 month" | "last 12 month" | "custom") => void
    dateRangeType: "today" | "yesterday" | "last 7 days" | "last 30 days" | "last 3 month" | "last 12 month" | "custom"
    className?: string
}

const TimeRangePicker = ({ handleDateRange, dateRangeType, className }: TimeRangePickerProps) => {

    const { t } = useTranslation()

    const { Option } = Select

    return(
        <Select className={cx(classes.main, className)} value={dateRangeType} defaultValue={"today"} onChange={handleDateRange}>
            <Option value={"today"}>{t("dashboard.datePicker.today")}</Option>
            <Option value={"yesterday"}>{t("dashboard.datePicker.yesterday")}</Option>
            <Option value={"last 7 days"}>{t("dashboard.datePicker.last7days")}</Option>
            <Option value={"last 30 days"}>{t("dashboard.datePicker.last30days")}</Option>
            <Option value={"last 3 month"}>{t("dashboard.datePicker.last3month")}</Option>
            <Option value={"last 12 month"}>{t("dashboard.datePicker.last12month")}</Option>
            <Option value={"custom"}>{t("dashboard.datePicker.custom")}</Option>
        </Select>
    )
}

export default TimeRangePicker