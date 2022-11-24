import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import {Stylized} from "../../../types";
import styles from './DateList.module.scss';

const DateList = ({className}: Stylized) => {

    const {sortedDates} = useAppSelector(state => state.chart)
    const monthsShort = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    return (
        <ul className={[styles.period,className].join(' ')}>
            {sortedDates && Object.entries(sortedDates).map(([weekNumber, days]) => {
                    const monday = days[0]
                    const mondayMonthShort = monthsShort[monday.month()]
                    const mondayDayNumber = monday.date().toString().length === 1 ? '0' + monday.date() : monday.date().toString()
                    const sunday = days[6]
                    const sundayMonthShort = monthsShort[sunday.month()]
                    const sundayDayNumber = sunday.date().toString().length === 1 ? '0' + sunday.date() : sunday.date().toString()
                    return (
                        <li className={styles.week} key={weekNumber}>
                            <div className={styles.week__top}>
                                <div className={styles.week__period}>{`${mondayDayNumber} ${mondayMonthShort} - ${sundayDayNumber} ${sundayMonthShort}`}</div>
                                <ul className={styles.week__dates}>
                                    {days.map((day, index) =>
                                        <li className={[styles.day,index === 5 || index ===  6 ? styles.weekend : '' ].join(' ')} key={day.valueOf()}>
                                            {day.date()}
                                        </li>)}
                                </ul>
                            </div>
                            <ul className={styles.chart}>
                                {days.map(date => <li className={styles.chart__column} key={date.valueOf()}></li>)}
                            </ul>
                        </li>
                    )
                }
            )}
        </ul>
    );
};

export default DateList;