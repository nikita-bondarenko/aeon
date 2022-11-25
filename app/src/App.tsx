import React, {useEffect} from 'react';
import {useGetDataQuery} from "./store/chart/chart.api";
import Table from "./components/table/Table";
import Top from "./components/top/Top";
import {useActions} from "./hooks/actions";
import {useDates} from "./hooks/dates";
import {usePlans} from "./hooks/plans";

function App() {

    const {data} = useGetDataQuery()
    const {setDates, setSortedDates,setStateProp} = useActions()
    const {parsePeriod, generateDates, sortDatesByWeeks} = useDates()
    const {fromTreeToArray} = usePlans()

    useEffect(() => {
        if (data && !!data.period && data.chart) {
           const [startDate, endDate] = parsePeriod(data.period)
            const dates = generateDates(startDate, endDate)
            setDates(dates)
            const sortedDates = sortDatesByWeeks(dates)
            setSortedDates(sortedDates)

            const plans = fromTreeToArray(data.chart)
            setStateProp({propName: 'plans', value: plans})
        }
    }, [data])

    return (
        <div className={"container"}>
            <Top></Top>
            <Table></Table>
        </div>
    );
}

export default App;
