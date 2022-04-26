
import {  ref } from '@vue/reactivity'
import {AllBusRoute} from '../helpers/busRoutes'
import {  currPosition } from './useMap'

export const startDistance = ref('')
export const endDistance = ref('')

export const getClosestBusStop = () => {

	 	startDistance.value = getShortPoint(currPosition)
	//  endDistance.value = getShortPoint(endLocation)

}

export const getShortPoint = (location) => {
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
function haversine_distance(mk1, mk2) {
	const R = 3958.8 // Radius of the Earth in miles
	const rlat1 = mk1.position.lat() * (Math.PI/180) // Convert degrees to radians
	const rlat2 = mk2.position.lat() * (Math.PI/180) // Convert degrees to radians
	const difflat = rlat2-rlat1 // Radian difference (latitudes)
	const difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180) // Radian difference (longitudes)

	const d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)))
	return d
}
	
function deg2rad(deg) {
	return deg * (Math.PI/180)
}

