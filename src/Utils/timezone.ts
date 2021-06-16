//@ts-ignore
import format from 'date-format'

export const getTimeByTimeZone = (date: string) => {
    let newDate = format('yyyy/MM/dd hh:mm:ssO', new Date(date))
    console.log(newDate)
    return newDate
}