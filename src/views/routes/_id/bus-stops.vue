<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			Bus stops
		</h3>
	
	</div>
	<home-page>
		<div class="shadow-sm mt-16 p-4 font-medium flex items-center">
			<i class="fas fa-road  text-2xl mr-3 "></i>
			{{selectedService}}
		</div>

		<div 
			class="flex items-center py-3.5 border-b border-lightGray px-4 gap-4" 
			v-for="n in AllBusRoute[selectedService]" :key="n">
			<span class="bg-secondary p-2 h-5 w-5 rounded-full"> {{n.index}}</span>
			<span class="text-base font-normal">{{n.name}}</span>

		</div>

	</home-page>

</template>



<script setup>
import {ref} from 'vue'
import homePage from '@/layouts/homePage.vue'
import { useRoute } from 'vue-router'
import RotueModal from '@/components/RouteModal.vue'
import { AllBusRoute } from '@/helpers/busRoutes'


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
