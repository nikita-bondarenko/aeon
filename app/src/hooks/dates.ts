import dayjs, {Dayjs} from "dayjs";
import {useState} from "react";
import weekday from 'dayjs/plugin/weekday';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isoWeek from 'dayjs/plugin/isoWeek'
import {SortedDates} from "../types";

dayjs.extend(isoWeek)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)

export const useDates = () => {

    const [dates, setDates] = useState<Dayjs[]>()

    const parsePeriod = (period: string): [start: Dayjs, end: Dayjs] => {
        const [stringDateFrom, stringDateTo] = period.split('-')
        const startDate = dayjs(stringDateFrom.split('.').reverse().join('-') + 'T12:00:00')
        const endDate = dayjs(stringDateTo.split('.').reverse().join('-') + 'T12:00:00')
        return [startDate, endDate]
    }

    const generateDates = (start: Dayjs, end: Dayjs): Dayjs[] => {

        let dates = [] as Dayjs[]

        function getDates(start: Dayjs, current: Dayjs, end: Dayjs): Dayjs[] {

            if (current.valueOf() < start.valueOf()) {
                return dates
            }

            if (end.weekday() !== 0 || start.weekday() !== 1) {
                const lastDate = end.weekday(7)
                const firstDate = start.weekday(1)
                return getDates(firstDate, lastDate, lastDate)
            }
            dates.unshift(current)
            return getDates(start, dayjs(current.valueOf() - 1000 * 60 * 60 * 24), end)
        }

      return  getDates(start, end, end)
    }


    const sortDatesByWeeks = (dates: Dayjs[]): SortedDates => {
        const sortedDates: SortedDates = {}
        dates.forEach(date => {
            const key = date.isoWeek()
            if (!sortedDates[key]) {
                sortedDates[key] = []
            }
            sortedDates[key].push(date)
        })
        return sortedDates
    }

    return {parsePeriod, generateDates, sortDatesByWeeks}

}