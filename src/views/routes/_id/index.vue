<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			{{selectedService}}
		</h3>
	
	</div>
	<home-page>
  
		<div v-if="selectedService == 'Nicosia 1'" class='w-full h-screen bottom-0 absolute -top-20'>
			<iframe  src="https://www.google.com/maps/d/embed?mid=11aQf6gpnCk1N1r_fmFLITInhgOR3J9on&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%" class="100vh"></iframe>
		</div>

		<div v-if="selectedService == 'Nicosia 2'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/embed?mid=14KMh9iVvKqLOFF-TS08nRV2ktF95duSR&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService == 'Hamitköy'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/embed?mid=13z0dYnpU6kwXh8e-OxZ1dgV6JexuI9vj&hl=tr&z=14" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService == 'Kızılbaş'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/embed?mid=1GmeU9X6tsioyF2gm9Qpjy38RffSq3CpQ&hl=tr&z=13" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService == 'Gönyeli 1'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/embed?mid=1hf1y1GnbmUzTV3MMmA_YdEUaNd0zHChe&z=13" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService == 'Gönyeli 2'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/embed?mid=1XRRhWCa2Ud4UR2V0jZtuMw8Z3PEZUO4h&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService == 'Gönyeli - Metehan'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/embed?mid=1Mzl8Y1mDwQXBYPg9QQG6qaOIpqjOfJas&hl=tr&z=13" width="100%" height="100%"></iframe>
		</div>
 
  
		<div v-if='selectedService == "Ortaköy - Yenikent"' class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/embed?mid=15xtEiemsDX0Fj0fKWhPr1YKPaqcaSCWq&hl=tr&ehbc=2E312F&z=13" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService  == 'Kyrenia'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/u/1/embed?mid=1l8blTebI9b0sIK51egZ-X71JZhEBGC2S&z=13" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService == 'Güzelyurt'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/u/1/embed?mid=1m04R9WbsFOWd6Pk7eZur7qJI6jqZgKHx&z=13" width="100%" height="100%"></iframe>
		</div>

		<div v-if="selectedService == 'Famagusta'" class='w-full h-full absolute -top-10'>
			<iframe src="https://www.google.com/maps/d/u/1/embed?mid=11rq2kW3xdyGS9HtsZsgtwsw-oD8z4WMY&z=11" width="100%" height="100%"></iframe>
		</div>

		<RotueModal :route="selectedService"/>
	</home-page>

</template>



<script setup>
import {ref} from 'vue'
import homePage from '@/layouts/homePage.vue'
import { useRoute } from 'vue-router'
import RotueModal from '@/components/RouteModal.vue'

const selectedService = ref('Nicosia 1')

selectedService.value = useRoute().params.id



</script>


<style>
/* .map{
  height: calc(100vh - 96px);
}

.inputContainer i {
   position: absolute;
} */
</style>
