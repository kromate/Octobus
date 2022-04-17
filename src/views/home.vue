<template>

	<div ref="mapDiv" class="map fixed top-12 bottom-12 86vh" />
	
	<bottom-modal/>
</template>



<script>
/* eslint-disable no-undef */

import {ref,onMounted,computed} from 'vue'
import { useGeolocation } from '../composables/useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

import BottomModal from '../components/BottomModal.vue'
// import { useService } from '../composables/service'

export default {
	name: 'App',
	components: { BottomModal },
	setup() {
		  const { coords } = useGeolocation()
		  const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
		  const mapDiv = ref(null)
		  const map = ref(null)

			    const currPos = computed(() => ({
			lat: coords.value.latitude,
			lng: coords.value.longitude
		}))

		  // To remove the default pointers on the map
		  const myStyles =[
		  {
		      featureType: 'poi',
		      elementType: 'labels',
		      stylers: [
		            { visibility: 'off' }
		      ]}]

		  onMounted(async () => {
		    await loader.load()
		    map.value = new google.maps.Map(mapDiv.value, {
		    // center: { lat: 35.2297654, lng: 33.3246926 },
				center:currPos.value,
		      zoom: 9,
		      disableDefaultUI: true,
		      styles: myStyles
		    })
			setMarker()
		  })

		const setMarker = () =>{
       
			const infoWindow = new google.maps.InfoWindow()
			const marker =  new google.maps.Marker({
				position:currPos.value,
				map:map.value,
				title: 'Your Location',
				optimized: false,
				icon: {
					path: faCircle.icon[4],
					fillColor: 'black',
					fillOpacity: 1,
					strokeWeight: 1,
					strokeColor: '#ffffff',
					scale: 0.075,},
			})
   
			marker.addListener('click', () => {
				infoWindow.close()
				infoWindow.setContent(marker.getTitle())
				infoWindow.open(marker.getMap(), marker)
			})
    
		}
		  
		// const  {data} = useService();
		// const selectedService = ref('Nicosia Service-1')
		// watch(data, (newD) => {
		// 	selectedService.value = newD.name
		// 	console.log(selectedService.value)
		// 	})
		
	
		  return { mapDiv}
	
	}
}
</script>


<style>
.map{
  height: calc(100vh - 96px);
}


</style>
