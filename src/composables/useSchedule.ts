import { AllBusRoute } from '@/helpers/busRoutes'


const startTime = '6:45'
const endTime = '21:20'

export const busRouteTime = (route) => {
    let len = AllBusRoute[route].length

    let timePerStop = (1 / len).toFixed(2)
    console.log(timePerStop);

    return { timePerStop }
}