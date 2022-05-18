import { AllBusRoute } from '@/helpers/busRoutes'
import { ref } from 'vue'

const startTime = '8:15'
const endTime = '20:15'
const suffix = '15'
export const dataTime = ref('')
export const busRouteTime = (route, index) => {

    let len = AllBusRoute[route].length

    if (new Date().getHours() < 8 || new Date().getHours() > 20) {
        return 'No buses are functioning now'
    }

    let timePerStop: number = parseFloat((1 / len).toFixed(2))
    let minPerStop = timePerStop * 60

    let RawCurrTime = minPerStop * index
    let currTime = RawCurrTime > 60 ? RawCurrTime - 60 : RawCurrTime
    let BusArrivalrealTime = parseFloat(currTime.toFixed(3));

    let globalMinute = new Date().getMinutes()

    console.log(BusArrivalrealTime, globalMinute);
    if (BusArrivalrealTime > globalMinute)
        return `${BusArrivalrealTime - globalMinute} mins`
    else
        return `${60 - (globalMinute - BusArrivalrealTime)} mins`
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

export const realTimeUpdate = (route, index) => {
    let len = AllBusRoute[route].length

    if (new Date().getHours() < 8 || new Date().getHours() > 20) {
        dataTime.value = 'No Active buses now'
        return
    }

    let timePerStop: number = parseFloat((1 / len).toFixed(2))
    let minPerStop = timePerStop * 60

    let RawCurrTime = minPerStop * index
    let currTime = RawCurrTime > 60 ? RawCurrTime - 60 : RawCurrTime
    let BusArrivalrealTime = parseFloat(currTime.toFixed(3));

    let globalMinute = new Date().getMinutes()

    console.log(BusArrivalrealTime, globalMinute);
    if (BusArrivalrealTime > globalMinute) {
        dataTime.value = `${BusArrivalrealTime - globalMinute} mins`
    } else {
        dataTime.value = `${60 - (globalMinute - BusArrivalrealTime)} mins`
    }
    // dataTime.value = `${BusArrivalrealTime - globalMinute} mins`
    const timer = setInterval(() => {
        if (BusArrivalrealTime === globalMinute) {
            navigator.vibrate([100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100]);
        }
        if (BusArrivalrealTime > globalMinute) {
            dataTime.value = `${BusArrivalrealTime - globalMinute} mins`
        } else {
            dataTime.value = `${60 - (globalMinute - BusArrivalrealTime)} mins`
        }

    }, 6000);
    // return dataTime.value
}