import React from 'react';
import styles from './PlanList.module.scss';
import {useAppSelector} from "../../../hooks/redux";
import PlanItem from "./plan-item/PlanItem";

const PlanList = () => {

    const {plans} = useAppSelector(state => state.chart)
    return (
        <ul className={styles.list}>
            {plans.map(plan =>
            <PlanItem key={plan.id} data={plan}></PlanItem>)}
        </ul>
            
    );
};

export default PlanList;