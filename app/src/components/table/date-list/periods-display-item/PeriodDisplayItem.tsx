import React, {useEffect, useState} from 'react';
import styles from './PeriodDisplayItem.module.scss';
import {Plan} from "../../../../types";
import {useAppSelector} from "../../../../hooks/redux";
import dayjs from "dayjs";
import {useOpen} from "../../../../hooks/open";

const PeriodDisplayItem = ({data}: { data: Plan }) => {

    const depth = data.nestingLevel
    const {dates, plans} = useAppSelector(state => state.chart)
    const [days, setDays] = useState(0)
    const [firstDateIndex, setFirstDayIndex] = useState(0)
    const [is, setIs] = useState(false)
    const {isShown} = useOpen()


    useEffect(() => {
        setIs(isShown(data.id, data.parents))
    },[plans])

    useEffect(() => {
        const startDate = dayjs(data.period_start + 'T12:00:00')
        const endDate = dayjs(data.period_end + 'T12:00:00')
        const start = dates.find(item => item.valueOf() === startDate.valueOf())
        const end = dates.find(item => item.valueOf() === endDate.valueOf())
        if (start && end) {
            const startDateIndex = dates.indexOf(start)
            const endDateIndex = dates.indexOf(end)
            setFirstDayIndex(startDateIndex)
            setDays(endDateIndex - startDateIndex + 1)
        }
    }, [])

    useEffect(() => {

    }, [])

    const colors = [
        {border: '#497CF6', background: '#E2EBFF'},
        {border: '#FFA530', background: '#FFF2E0'},
        {border: '#2DB77B', background: '#CFF0D6'},
        {border: '#2DB77B', background: '#CFF0D6'},
        {border: '#FFA530', background: '#FFF2E0'},
        {border: '#FFA530', background: '#FFF2E0'},
    ]

    return (
        <li className={styles.item}>
            {!!days && is && <div style={{width: days * 22.2, left: firstDateIndex * 22.2, borderColor: colors[depth].border, background: colors[depth].background}} className={styles.line}></div>}
        </li>
    );
};

export default PeriodDisplayItem;