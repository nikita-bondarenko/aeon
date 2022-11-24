import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChartState, Dates, ServerData, SortedDates} from "../../types";
import {Dayjs} from "dayjs";

const initialState: ChartState = {
    project: '',
    period: '',
    chart: null,
    dates: [],
    sortedDates: null
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
        }
    }
})

export const chartReducer = chartSlice.reducer
export const chartActions = chartSlice.actions