import React, {useEffect, useState} from 'react';
import {Plan} from "../../../../types";
import styles from './PlanItem.module.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {useActions} from "../../../../hooks/actions";
import {useOpen} from "../../../../hooks/open";

const PlanItem = ({data}: { data: Plan }) => {

    const depth = data.nestingLevel
    const [isOpen, setIsOpen] = useState(true)

    const {plans} = useAppSelector(state => state.chart)
    const {setPlanIsOpen} = useActions()
    const [is, setIs] = useState(false)

    const {isShown} = useOpen()

    useEffect(() => {
        setPlanIsOpen({id: data.id, value: isOpen})
    }, [isOpen])

    useEffect(() => {
        setIs(isShown(data.id, data.parents))
    },[plans])

    const icons = [
        'layer', 'bulb',
        'bookmark',
        'target',
        'flash',
    ]

    const iconsBackground = ['#F5F1FE', '#EEF9F4', '#FEFBF0', '#FAEFF2', '#F5F1FE']
    return is ? (
        <li onClick={() => setIsOpen(state => !state)}
            className={[styles.item, !!data.childQuantity && styles.item__hover].join(' ')}>
            <div className={styles.content} style={{paddingLeft: depth * 22}}>
                <div
                    className={[!!data.childQuantity && "icon-arrow", styles.arrow, !isOpen && styles.arrow__up].join(' ')}></div>
                <div style={{background: iconsBackground[depth]}}
                     className={[styles.icon, `icon-${icons[depth]}`].join(' ')}></div>
                <div className={styles.number}>{data.childQuantity}</div>
                <p className={styles.text}>{data.title}</p>
            </div>
        </li>
    ) : <></>;
};

export default PlanItem;