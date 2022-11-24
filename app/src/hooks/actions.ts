import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {chartActions} from "../store/chart/chart.slice";

const actions = {
    ...chartActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}