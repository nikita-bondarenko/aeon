import React from 'react';
import styles from './PeriodsDisplay.module.scss';
import {useAppSelector} from "../../../../hooks/redux";
import PeriodDisplayItem from "../periods-display-item/PeriodDisplayItem";

const PeriodsDisplay = () => {

    const {plans} = useAppSelector(state => state.chart)

    return (
        <div className={styles.display}>
            <ul className={styles.list}>
                {plans.map(plan => <PeriodDisplayItem data={plan} key={plan.id}></PeriodDisplayItem>)}
            </ul>
        </div>


    );
};

export default PeriodsDisplay;