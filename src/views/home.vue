<template>
<keep-alive>
  <div ref="mapDiv" class="map fixed top-12 bottom-12 86vh" />
</keep-alive>
<bottom-modal/>
</template>



<script>
/* eslint-disable no-undef */

import {  ref,onMounted} from 'vue'
// import { useGeolocation } from '../composables/useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
// import { faBus } from "@fortawesome/free-solid-svg-icons";
import BottomModal from '../components/BottomModal.vue';
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export default {
  name: 'App',
  components: { BottomModal },
  setup() {
    const userLocation = ref('')
    const userDestination = ref('')
    const service1 = ref([])

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
        center: { lat: 35.13, lng: 33.19 },
        zoom: 12,
        disableDefaultUI: true,
        styles: myStyles
      })
      // setMarker()
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map.value);

      const response = await fetch("https://gist.githubusercontent.com/Abiola-Farounbi/40bad9f072180e595b9f2e6e99672527/raw/5f599664350128aa37f7a1d4ec10dac8fb01ce5d/services.json");
      const data = await response.json();
      service1.value  = data
    


  directionsService
    .route({
    origin: "1521 NW 54th St, Seattle, WA 98107 ",
    destination: "San Diego, CA",
    waypoints: [{
      location: new google.maps.LatLng(42.496403, -124.413128),
      stopover: true
    }],
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);

      const route = response.routes[0];
      console.log(route)
    })

    })


   


  // const busLocations = [
    
  //   [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
  //   [{ lat: 34.8791806,  lng: -111.8265049}, "Boynton Pass"],
  //   [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
  //   [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
  //   [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
  // ];

  //   const setMarker = () =>{
       
  //       const infoWindow = new google.maps.InfoWindow();
  //           busLocations.forEach(([position, title], i) => {
  //         const marker =  new google.maps.Marker({
  //           position,
  //           map:map.value,
  //           title: `${i + 1}. ${title}`,
  //           label: `${i + 1}`,
  //           optimized: false,
  //             icon: {
  //                   path: faBus.icon[4],
  //                   fillColor: "#4A545D",
  //                   fillOpacity: 1,
  //                   strokeWeight: 1,
  //                   strokeColor: "#ffffff",
  //                   scale: 0.075,},
  //         });

   
  //   marker.addListener("click", () => {
  //     infoWindow.close();
  //     infoWindow.setContent(marker.getTitle());
  //     infoWindow.open(marker.getMap(), marker);
  //   });
  //     });
  // }







 


    
    return { mapDiv,userLocation,userDestination,service1}
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
