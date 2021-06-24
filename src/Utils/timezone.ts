//@ts-ignore
import moment from 'moment'

export const getTimeByTimeZone = (date: string) => {
    const currentOffset = moment().utcOffset()
    const currentDate = moment(date).utcOffset(currentOffset).format('YYYY-MM-DD HH:mm:ss')
    return currentDate
}

export const getTimePeriod = (period: "today" | "yesterday" | "last 7 days" | "last 30 days" | "last 3 month" | "last 12 month" | "custom", from?: string, to?: string) => {
    let today = moment()
    let usageDay = moment()

    let range = ""

    switch(period){
        case "today": {
            range = getTimeByTimeZone(today.startOf('day').toString()) + "," + getTimeByTimeZone(today.endOf('day').toString())
            break
        }
        case "yesterday": {
            range = getTimeByTimeZone(usageDay.startOf('day').subtract(1, 'days').toString()) + "," + getTimeByTimeZone(today.endOf('day').toString())
            break
        }
        case "last 7 days": {
            range = getTimeByTimeZone(usageDay.startOf('day').subtract(7, 'days').toString()) + "," + getTimeByTimeZone(today.endOf('day').toString())
            break
        }
        case "last 30 days": {
            range = getTimeByTimeZone(usageDay.startOf('day').subtract(30, 'days').toString()) + "," + getTimeByTimeZone(today.endOf('day').toString())
            break
        }
        case "last 3 month": {
            range = getTimeByTimeZone(usageDay.startOf('day').subtract(3, 'month').toString()) + "," + getTimeByTimeZone(today.endOf('day').toString())
            break
        }
        case "last 12 month": {
            range = getTimeByTimeZone(usageDay.startOf('day').subtract(12, 'month').toString()) + "," + getTimeByTimeZone(today.endOf('day').toString())
            break
        }
        case "custom": {
            if(from && to){
                let fromDate = moment(from).startOf('day').toString()
                let toDate = moment(to).endOf('day').toString()
                range = getTimeByTimeZone(fromDate) + "," + getTimeByTimeZone(toDate)
            }
            break
        }   
    }

    return range
}