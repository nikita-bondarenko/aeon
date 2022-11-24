import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import styles from './Top.module.scss'

const Top = () => {
    const {project, period} = useAppSelector(state => state.chart)

    return (
        <div className={styles.top}>
            <h1 className={styles.title}>{`${project} / ${period}`}</h1>
            <button className={[styles.button, "icon-download"].join(' ')}>Export</button>
        </div>
    );
};

export default Top;