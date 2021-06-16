//@ts-ignore
import moment from 'moment'

export const getTimeByTimeZone = (date: string) => {
    const currentOffset = moment().utcOffset()
    const currentDate = moment(date).utcOffset(currentOffset).format('YYYY/MM/DD HH:mm:ss')
    return currentDate
}