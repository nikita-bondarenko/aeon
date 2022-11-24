import {Dayjs} from "dayjs";

export type Stylized = {
    style?: {
        [key: string]: string
    },
    className?: string
}

export type SortedDates = {
    [key: string]: Dayjs[]
}

export type Dates = {
    dates: Dayjs[]
}

export type ServerData = {
    project: string;
    period: string;
    chart: Chart | null;
}

export type ChartState = ServerData & Dates & { sortedDates: SortedDates | null }

export type Chart = {
    id: number;
    title: string;
    period_start: Date;
    period_end: Date;
    sub: ChartSub[];
}

export type ChartSub = {
    id: number;
    title: string;
    period_start: Date;
    period_end: Date;
    sub: SubSub[];
}

export type SubSub = {
    id: number;
    title: string;
    period_start: Date;
    period_end: Date;
    sub?: SubSub[];
}
