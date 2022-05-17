import { AllBusRoute } from '@/helpers/busRoutes'


const startTime = '8:15'
const endTime = '20:15'
const suffix = '15'

export const busRouteTime = (route, index) => {
    let len = AllBusRoute[route].length

    let timePerStop: number = parseFloat((1 / len).toFixed(2))
    let minPerStop = timePerStop * 60

    let RawCurrTime = minPerStop * index
    let currTime = RawCurrTime > 60 ? RawCurrTime - 60 : RawCurrTime
    let realTime = parseFloat(currTime.toFixed(3));

    let globalMinute = new Date().getMinutes()

    console.log(realTime, globalMinute);
    return { minPerStop }
}

// const compareTime = (val1, val2) => {

// }

export const returnTimeArray = () => {
    let ans = [] as any
    let curr = 8
    while (curr < parseFloat(endTime)) {
        ans.push(`${curr}:${suffix} - ${++curr}:${suffix}`)
    }

    return ans

}

