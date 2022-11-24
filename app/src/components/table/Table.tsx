import React from 'react';
import styles from './Table.module.scss'
import DateList from "./date-list/DateList";
import PlanList from "./plan-list/PlanList";

const Table = () => {

    return (
        <div className={styles.table}>
            <div className={styles.table__left}>
                <div className={styles.title}>
                    <h2 className={styles.title__text}>Work item</h2>
                </div>
                <PlanList></PlanList>
            </div>
            <div className={styles.table__right}>
                <div className={styles.table__wrapper}>
                    <DateList className={styles.header__dates}></DateList>
                </div>
            </div>

        </div>
    );
};

export default Table;