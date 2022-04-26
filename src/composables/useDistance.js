
import {  ref } from '@vue/reactivity'
import {AllBusRoute} from '../helpers/busRoutes'
import {  currPosition, map } from './useMap'

export const startDistance = ref('')
export const endDistance = ref('')

export const getClosestBusStop = () => {

	console.log(getShortPoint(currPosition))


	const directionsService = new google.maps.DirectionsService()
	const directionsRenderer = new google.maps.DirectionsRenderer()
	directionsRenderer.setMap(map.value)

	 const route = {
		origin: `${currPosition.value.lat},${currPosition.value.lng}`,
		destination:getShortPoint(currPosition).cord,
		travelMode: 'WALKING'
	}
	 
	directionsService.route(route,
		function(response, status) { // anonymous function to capture directions
			if (status !== 'OK') {
				window.alert('Directions request failed due to ' + status)
				return
			} else {
				directionsRenderer.setDirections(response) // Add route to the map
				const directionsData = response.routes[0].legs[0] // Get data about the mapped route
				if (!directionsData) {
					window.alert('Directions request failed')
					return
				}
				else {
					startDistance.value = getShortPoint(currPosition)
					console.log(directionsData)
					console.log(' Driving distance is ' + directionsData.distance.text + ' (' + directionsData.duration.text + ').')
					// document.getElementById('msg').innerHTML += ' Driving distance is ' + directionsData.distance.text + ' (' + directionsData.duration.text + ').'
				}
			}
		})
	//  endDistance.value = getShortPoint(endLocation)

}

export const getShortPoint = (location) => {
	let closestPoint = Infinity
	let closestPlace = {}

	Object.keys(AllBusRoute).map((x) => {
		closestPlace, 
		AllBusRoute[x].map((placeObj) => {
			const cordsObj = placeObj.cord.split(',')
			const distance = haversine_distance(parseFloat(location.value.lat), parseFloat(location.value.lng), parseFloat(cordsObj[0]), parseFloat(cordsObj[1]))
			if (distance < closestPoint) {
				closestPoint = distance
				closestPlace = {route:x, ...placeObj, distance}
			} 
		})
	})

	return closestPlace
}



function haversine_distance(lat1,lon1,lat2,lon2) {
	const R = 3958.8 // Radius of the Earth in miles
	const rlat1 = lat1 * (Math.PI/180) // Convert degrees to radians
	const rlat2 = lat2 * (Math.PI/180) // Convert degrees to radians
	const difflat = rlat2-rlat1 // Radian difference (latitudes)
	const difflon = (lon2 - lon1) * (Math.PI / 180) // Radian difference (longitudes)

	const d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)))
	
	return d
}
	
// function deg2rad(deg) {
// 	return deg * (Math.PI/180)
// }

