<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			Schedule
		</h3>
	
	</div>
	<home-page>
		<div class="shadow-sm mt-16 p-4 font-medium flex items-center">
			<i class="fas fa-road  text-2xl mr-3 "></i>
			{{selectedService}}
		</div>

		<div class="mb-24">
			<div 
				class="flex items-center py-3.5 border-b border-lightGray px-4 gap-4" 
				v-for="n in timeArray" :key="n">
				<i class="fas fa-clock text-3xl" @click="$router.go(-1)"></i>

				<span class="text-base font-normal">{{n}}</span>

			</div>
		</div>


	</home-page>

</template>



<script setup>
import {ref} from 'vue'
import homePage from '@/layouts/homePage.vue'
import { useRoute } from 'vue-router'
// import { AllBusRoute } from '@/helpers/busRoutes'
import { returnTimeArray } from '@/composables/useSchedule'

const selectedService = ref('Nicosia 1')
const timeArray = ref([])
selectedService.value = useRoute().params.id


timeArray.value = returnTimeArray()
</script>


<style>
/* .map{
  height: calc(100vh - 96px);
}

.inputContainer i {
   position: absolute;
} */
</style>
