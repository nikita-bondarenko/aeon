import {configureStore} from "@reduxjs/toolkit";
import {chartApi} from "./chart/chart.api";
import {chartReducer} from "./chart/chart.slice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [chartApi.reducerPath]: chartApi.reducer,
        chart: chartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(chartApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>