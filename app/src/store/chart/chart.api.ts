import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ServerData} from "../../types";
import {chartActions} from "./chart.slice";

const {fillState} = chartActions

export const chartApi = createApi({
    reducerPath: 'chart/api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://82.202.204.94/tmp/test.php',
    }),
    endpoints: (build) => ({
        getData: build.query<ServerData, void>({
            query: () => ({
                url: ''
            }),
            async onQueryStarted(prop, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data)
                    dispatch(fillState(data))
                } catch (err) {
                    console.log(err)
                }
            },
        })
    })
})

export const {useGetDataQuery} = chartApi