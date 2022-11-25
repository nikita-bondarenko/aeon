import {Plan} from "../types";
import {useAppSelector} from "./redux";

export const useOpen = () => {

    const {plans} = useAppSelector(state => state.chart)


    const isShown = (id: number ,parents: number[]) => {
        const currentPlans = parents.reduce((arr: Plan[], id) => {
            const currentPlan = plans.find(plan => plan.id === id)
            return currentPlan ? [currentPlan, ...arr] : arr
        }, [])

        return currentPlans.every(item => item.isOpen)
    }
    return {isShown}
}