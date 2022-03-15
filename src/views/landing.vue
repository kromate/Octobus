<template>
<keep-alive>
  <div ref="mapDiv" class="map fixed top-12 bottom-12 86vh" />
</keep-alive>
<div class=" px-4 z-50 fixed bottom-16 inset-x-0 bg-white justify-between w-full text-gray ">
  <div class="inputContainer">
   <i class="fa-solid fa-location-crosshairs text-primary text-left text-2xl px-4 pt-6 w-20"></i>
   <input class="w-full rounded-xl p-3 bg-lightGray text-center  text-gray mt-4 mb-2" placeholder="Your Location" type="text"  v-model="userLocation" >
</div>
<div class="inputContainer">
    <i class="fa-solid fa-location-dot text-primary text-left text-2xl p-4 w-20"></i>
    <input class="w-full rounded-xl p-3 bg-lightGray text-center text-gray mb-4 mt-2" placeholder="Where are you going?" type="text"  v-model="userDestination" >
</div>
</div>
</template>



<script>
/* eslint-disable no-undef */

import { computed, ref,onMounted} from 'vue'
import { useGeolocation } from '../composables/useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
import { faBus } from "@fortawesome/free-solid-svg-icons";
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export default {
  name: 'App',
  setup() {
    // const { coords } = useGeolocation()
    const userLocation = ref('')
    const userDestination = ref('')
    
    // const currPos = computed(() => ({
    //   lat: 	53.958332,
    //   lng: -1.080278
    // }))

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    var map = ref(null)

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
        center: { lat: 34.84555, lng: -111.8035 },
        zoom: 12,
        disableDefaultUI: true,
        // styles: myStyles
      })
      setMarker()
    })



  const busLocations = [
    
    [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
    [{ lat: 34.8791806,  lng: -111.8265049}, "Boynton Pass"],
    [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
    [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
    [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
  ];

    const setMarker = () =>{
       
        const infoWindow = new google.maps.InfoWindow();
            busLocations.forEach(([position, title], i) => {
          const marker =  new google.maps.Marker({
            position,
            map:map.value,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
              icon: {
                    path: faBus.icon[4],
                    fillColor: "#4A545D",
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
      });
  }







 


    
    return { mapDiv,userLocation,userDestination}
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
