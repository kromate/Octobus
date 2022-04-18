
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY,  libraries: ['places']})

export const AutoComplete = async () => {
	console.log(document.getElementById('autocomplete'))
	await loader.load()

	new google.maps.places.Autocomplete(
		document.getElementById('autocomplete')
	)
}