import React, {useState} from 'react';
import styles from './Table.module.scss'
import DateList from "./date-list/DateList";
import PlanList from "./plan-list/PlanList";
import {useAppSelector} from "../../hooks/redux";

const Table = () => {

    const { isLeftChartBorder, isRightChartBorder, dates} = useAppSelector(state => state.chart)

    return (
        <div className={styles.table}>
            <div className={styles.table__left}>
                <div className={styles.title}>
                    <h2 className={styles.title__text}>Work item</h2>
                </div>
                <PlanList></PlanList>
            </div>
            <div className={styles.table__right}>
                <div style={{width: dates.length * 22.1}} className={styles.table__wrapper}>
                    <DateList className={styles.header__dates}></DateList>
                </div>
                {!isLeftChartBorder && <div className={[styles.fade__left].join(' ')}></div>}
                {!isRightChartBorder && <div className={[styles.fade__right].join(' ')}></div>}
            </div>

        </div>
    );
};

export default Table;