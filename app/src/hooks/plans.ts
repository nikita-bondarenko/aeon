import {Chart, ChartSub, Plan, SubSub} from "../types";

export const usePlans = () => {

    const fromTreeToArray = (chart: Chart) => {
        const plans: Plan[] = []

        createPlan(chart, [])

        function createPlan(chart: SubSub, parents: number[]) {
            const plan: Plan = {
                id: chart.id,
                title: chart.title,
                period_end: chart.period_end,
                period_start: chart.period_start,
                parents: parents || [],
                nestingLevel:  parents.length,
                childQuantity: chart.sub ? chart.sub.length : 0,
                isOpen: false,
            }
            plans.push(plan)
            chart.sub && chart.sub.forEach(item => createPlan(item, [...parents, chart.id]))
        }

        return plans
    }

    return {
        fromTreeToArray
    }
}