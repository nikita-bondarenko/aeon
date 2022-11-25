import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChartState, Dates, Plan, ServerData, SortedDates} from "../../types";
import {Dayjs} from "dayjs";

const initialState: ChartState = {
    project: '',
    period: '',
    chart: null,
    dates: [],
    sortedDates: null,
    isLeftChartBorder: false,
    isRightChartBorder: false,
    plans: []
}

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        fillState(state, {payload}: PayloadAction<ServerData>) {
            // @ts-ignore
            Object.entries(payload).forEach(([key, value]) => state[key] = value)
        },
         setDates(state, {payload}: PayloadAction<Dayjs[]>) {
            state.dates = payload
         },
        setSortedDates(state, {payload}: PayloadAction<SortedDates>) {
            state.sortedDates = payload
        },
        setStateProp(state, {payload}: PayloadAction<{propName:'isLeftChartBorder' | 'isRightChartBorder' | "plans", value: boolean | Plan[]}>) {
            // @ts-ignore
            state[payload.propName] = payload.value
        },
        setPlanIsOpen(state, {payload} : PayloadAction<{id: number, value: boolean}>) {
            const plan = state.plans.find(item => item.id === payload.id )
            if (plan) {
                plan.isOpen = payload.value
            }
        }
    }
})

export const chartReducer = chartSlice.reducer
export const chartActions = chartSlice.actions