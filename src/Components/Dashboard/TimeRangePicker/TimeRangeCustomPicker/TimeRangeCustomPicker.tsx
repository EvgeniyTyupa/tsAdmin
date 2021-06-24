import React from 'react'
import { Button, DatePicker } from 'antd'
import classes from './TimeRangeCustomPicker.module.css'
import { CloseSquareFilled } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

interface TimeRangeCustomPickerProps {
    handleOpenRangeModal: () => void
}

const TimeRangeCustomPicker = ({ handleOpenRangeModal }: TimeRangeCustomPickerProps) => {
    
    const { t } = useTranslation()

    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <div className={classes.header}>
                    <h3>{t("dashboard.datePicker.customPicker.title")}</h3>
                    <Button onClick={handleOpenRangeModal}>
                        <CloseSquareFilled/>
                    </Button>
                </div>
                <DatePicker.RangePicker/>
                <div className={classes.buttons}>
                    <Button type="primary">{t("actions.apply")}</Button>
                    <Button onClick={handleOpenRangeModal}>{t("actions.cancel")}</Button>
                </div>
            </div>
        </div>
    )
}

export default TimeRangeCustomPicker