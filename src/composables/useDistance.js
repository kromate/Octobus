
import {  ref } from '@vue/reactivity'
import {AllBusRoute} from '../helpers/busRoutes'
import { endLocation, currPosition } from './useMap'

export const startDistance = ref('')
export const endDistance = ref('')

export const getClosestBusStop = () => {

	 	startDistance.value = getShortPoint(currPosition, 'start')
	 endDistance.value = getShortPoint(endLocation, 'end')

}

export const getShortPoint = (location, x) => {
	console.log(location, x)
	let closestPoint = Infinity
	let closestPlace = {}

	Object.keys(AllBusRoute).map((x) => {
		closestPlace, 
		AllBusRoute[x].map((placeObj) => {
			const cordsObj = placeObj.cord.split(',')
			console.log((typeof location.value.lat, typeof location.value.lng, typeof cordsObj[0], typeof cordsObj[1]))
			const distance = getDistanceFromLatLonInKm(parseInt(location.value.lat), parseInt(location.value.lng), parseInt(cordsObj[0]), parseInt(cordsObj[1]))
			if (distance < closestPoint) {
				closestPoint = distance
				closestPlace = {route:x, ...placeObj, distance}
			} 
		})
	})

	return closestPlace
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	const R = 6371 // Radius of the earth in km
	const dLat = deg2rad(lat2-lat1)  // deg2rad below
	const dLon = deg2rad(lon2-lon1) 
	const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
     
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)) 
	const d = R * c // Distance in km
	return d
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

