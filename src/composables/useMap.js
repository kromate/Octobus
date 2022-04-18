
import {computed, ref} from '@vue/reactivity'
import { useGeolocation } from './useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY


const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
const map = ref(null)
  

     
const myStyles =[
		  {
		      featureType: 'poi',
		      elementType: 'labels',
		      stylers: [
			{ visibility: 'off' }
		]
	}]

              
export const initMap = async (mapDiv) => {
	const { coords } = useGeolocation()
	
	const currPos = computed(() => ({
		lat: coords.value.latitude,
		lng: coords.value.longitude
	}))
    	await loader.load()
		    map.value = new google.maps.Map(mapDiv.value, {
		    // center: { lat: 35.2297654, lng: 33.3246926 },
		center:currPos.value,
		      zoom: 16,
		      disableDefaultUI: true,
		      styles: myStyles
	})
    
	const checkLoc = setInterval(async () => {
		if (coords.value.latitude || coords.value.longitude) {
			await clearInterval(checkLoc)
			const { currLocation } = setMarker(currPos)
			
		}
	}, 2000)
	
}      
export const setMarker = (currPos) => {
	const infowindow = new google.maps.InfoWindow()
	const geocoder = new google.maps.Geocoder()
	console.log(currPos)
	geocoder
		.geocode({ location: currPos.value })
		.then((response) => {
			console.log(response)
			const currLocation = response.results[0]
			if (response.results[0]) {
				map.value.setZoom(16)

				const marker = new google.maps.Marker({
					position: currPos.value,
					map: map.value,
				})

				infowindow.setContent(response.results[0].formatted_address)
				infowindow.open(map, marker)
			} else {
				window.alert('No results found')
			}
			return {currLocation }
		})
		.catch((e) => window.alert('Geocoder failed due to: ' + e))
	
	
}

// const marker =  new google.maps.Marker({
// 	position:currPos.value,
// 	map:map.value,
// 	title: 'Your Location',
// 	optimized: false,
	
// })
   
// marker.addListener('click', () => {
// 	infoWindow.close()
// 	infoWindow.setContent(marker.getTitle())
// 	infoWindow.open(marker.getMap(), marker)
// })
    
// }