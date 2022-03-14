<template>
<keep-alive>
  <div ref="mapDiv" class="map fixed top-12 bottom-12 86vh" />
</keep-alive>


    <!-- This library gave cors error -->
   <!-- <GoogleMap api-key = ''
    class='map fixed top-12 bottom-12 86vh' :center="currPos" :zoom= "4">
     <Marker :options="{ position: currPos }" />
  </GoogleMap> -->
 
</template>



<script>
/* eslint-disable no-undef */

import { computed, ref,onMounted} from 'vue'
import { useGeolocation } from '../composables/useGeolocation'
// import { GoogleMap, Marker } from 'vue3-google-map'

import { Loader } from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export default {
  name: 'App',
  // components: { GoogleMap, Marker },
  setup() {
    const { coords } = useGeolocation()

    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    const otherPos = ref(null)

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    var map = ref(null)
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 17
      })
      setMarker()
    })
    const setMarker = () =>{
     const marker =  new google.maps.Marker({
         position: currPos.value,
         map: map.value,
  });
   }
 


    
    return { currPos, otherPos,mapDiv}
  }
}
</script>


<style>
.map{
  height: calc(100vh - 96px);
}
</style>
