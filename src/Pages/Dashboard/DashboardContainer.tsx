import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../Redux/reduxStore'
import { getTimeByTimeZone, getTimePeriod } from '../../Utils/timezone'
import Dashboard from './Dashboard'

const DashboardContainer = () => {
    const [dateRange, setDateRange] = useState<string>(getTimePeriod("today"))
    const [isOpenCustomRangeDateModal, setIsOpenCustomRangeDateModal] = useState<boolean>(false)
    const [dateRangeType, setDateRangeType] = useState<"today" | "yesterday" | "last 7 days" | "last 30 days" | "last 3 month" | "last 12 month" | "custom">("today")

    const handleDateRange = (range: "today" | "yesterday" | "last 7 days" | "last 30 days" | "last 3 month" | "last 12 month" | "custom") => {
        setDateRangeType(range)
        if(range === "custom"){
            handleOpenRangeModal()
        }else {
            setDateRange(getTimePeriod(range))
        }
    }

    const handleOpenRangeModal = () => {
        if(!isOpenCustomRangeDateModal === false){
            setDateRange(getTimePeriod("today"))
            setDateRangeType("today")
        }
        setIsOpenCustomRangeDateModal(!isOpenCustomRangeDateModal)
    }

    return(
        <Dashboard 
            dateRange={dateRange} 
            isOpenCustomRangeDateModal={isOpenCustomRangeDateModal} 
            handleOpenRangeModal={handleOpenRangeModal}
            handleDateRange={handleDateRange}
            dateRangeType={dateRangeType}
        />
    )
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {

})(DashboardContainer)