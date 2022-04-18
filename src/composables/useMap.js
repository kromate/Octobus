
import {computed, ref} from '@vue/reactivity'
import { useGeolocation } from './useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
import { useLoading } from './useNotification'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY


const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY, libraries: ['places'] })
const map = ref(null)
  
export const currLocation = ref('')

     
const myStyles =[
		  {
		      featureType: 'poi',
		      elementType: 'labels',
		      stylers: [
			{ visibility: 'off' }
		]
	}]
              
export const initMap = async (mapDiv) => {
	useLoading().openLoading()
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
			await setMarker(currPos)
			useLoading().closeLoading()
		}
	}, 1000)
	
}      
export const setMarker = async (currPos) => {
	const infowindow = new google.maps.InfoWindow()
	
	await geocoder(currPos, infowindow)
	await AutoComplete()

}

export const geocoder = async (currPos, infowindow) => {
	const geocoder = new google.maps.Geocoder()
	const data = await geocoder.geocode({ location: currPos.value })
	 currLocation.value = data

	try {
		if (data.results[0]) { 
			map.value.setZoom(15)
			const marker = new google.maps.Marker({
				position: currPos.value,
				map: map.value,
			})
			infowindow.setContent(data.results[0].formatted_address)
			infowindow.open(map, marker)
		} else {
			alert('Can\'t find your current location')
		}
	} catch (e) {
		 window.alert('Geocoder failed due to: ' + e)
	}

}

export const AutoComplete = async () => {
	await loader.load()

	new google.maps.places.Autocomplete(
		document.getElementById('autocomplete'),
		{
			bounds: new google.maps.LatLngBounds(
				new google.maps.LatLng(39.925533, 32.866287)
			)
		}
	)
}