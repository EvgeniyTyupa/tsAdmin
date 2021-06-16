//@ts-ignore
import moment from 'moment'

export const getTimeByTimeZone = (date: string) => {
    const currentOffset = moment().utcOffset()
    console.log(currentOffset)
    const currentDate = moment(date).utcOffset(currentOffset).format('YYYY-MM-DD HH:mm')
    console.log(currentDate)
    return currentDate
}