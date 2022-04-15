<template>
	<keep-alive>
		  <div ref="mapDiv" class="map fixed top-12 bottom-12 86vh" />
	</keep-alive>
	<!-- <div v-if="selectedService == 'Nicosia Service-1'" class='w-full h-full absolute -top-24'>
		<iframe  src="https://www.google.com/maps/d/embed?mid=11aQf6gpnCk1N1r_fmFLITInhgOR3J9on&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Nicosia Service-2'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/embed?mid=14KMh9iVvKqLOFF-TS08nRV2ktF95duSR&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Hamitköy Service'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/embed?mid=13z0dYnpU6kwXh8e-OxZ1dgV6JexuI9vj&hl=tr&z=14" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Kızılbaş Service'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/embed?mid=1GmeU9X6tsioyF2gm9Qpjy38RffSq3CpQ&hl=tr&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Gönyeli Service-1'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/embed?mid=1hf1y1GnbmUzTV3MMmA_YdEUaNd0zHChe&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Gönyeli Service-2'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/embed?mid=1XRRhWCa2Ud4UR2V0jZtuMw8Z3PEZUO4h&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Gönyeli / Metehan Service'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/embed?mid=1Mzl8Y1mDwQXBYPg9QQG6qaOIpqjOfJas&hl=tr&z=13" width="100%" height="100%"></iframe>
	</div>
 
  
	<div v-if='selectedService == "Ortakoy / Yenikent Service Information"' class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/embed?mid=15xtEiemsDX0Fj0fKWhPr1YKPaqcaSCWq&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService  == 'Kyrenia Service Information'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/u/1/embed?mid=1l8blTebI9b0sIK51egZ-X71JZhEBGC2S&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Güzelyurt Service Information'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/u/1/embed?mid=1m04R9WbsFOWd6Pk7eZur7qJI6jqZgKHx&z=13" width="100%" height="100%"></iframe>
	</div>

	<div v-if="selectedService == 'Famagusta Service Information'" class='w-full h-full absolute -top-24'>
		<iframe src="https://www.google.com/maps/d/u/1/embed?mid=11rq2kW3xdyGS9HtsZsgtwsw-oD8z4WMY&z=11" width="100%" height="100%"></iframe>
	</div>


 -->

	<bottom-modal/>
</template>



<script>
/* eslint-disable no-undef */

import {ref,onMounted,computed, watch} from 'vue'
import { useGeolocation } from '../composables/useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
import { faCircle } from "@fortawesome/free-solid-svg-icons";
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
		  var map = ref(null)

			    const currPos = computed(() => ({
				lat: coords.value.latitude,
				lng: coords.value.longitude
				}))

		  // To remove the default pointers on the map
		  var myStyles =[
		  {
		      featureType: "poi",
		      elementType: "labels",
		      stylers: [
		            { visibility: "off" }
		      ]}];

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
       
        const infoWindow = new google.maps.InfoWindow();
          const marker =  new google.maps.Marker({
            position:currPos.value,
            map:map.value,
            title: 'Your Location',
            optimized: false,
              icon: {
                    path: faCircle.icon[4],
                    fillColor: "black",
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: "#ffffff",
                    scale: 0.075,},
          });
   
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
    
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

.inputContainer i {
   position: absolute;
}
</style>
