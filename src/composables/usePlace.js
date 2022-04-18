
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })

export const AutoComplete = async() => {
	await loader.load()

	new google.maps.places.Autocomplete(
		document.getElementById('autocomplete')
	)
}