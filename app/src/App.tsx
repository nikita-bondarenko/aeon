import React, {useEffect} from 'react';
import {useGetDataQuery} from "./store/chart/chart.api";
import Table from "./components/table/Table";
import Top from "./components/top/Top";
import {useActions} from "./hooks/actions";
import {useDates} from "./hooks/dates";

function App() {

    const {data} = useGetDataQuery()
    const {setDates, setSortedDates} = useActions()
    const {parsePeriod, generateDates, sortDatesByWeeks} = useDates()

    useEffect(() => {
        if (data && !!data.period) {
           const [startDate, endDate] = parsePeriod(data.period)
            const dates = generateDates(startDate, endDate)
            setDates(dates)
            const sortedDates = sortDatesByWeeks(dates)
            setSortedDates(sortedDates)
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
