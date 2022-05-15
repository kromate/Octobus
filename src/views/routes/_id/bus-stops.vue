<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			{{selectedService}}
		</h3>
	
	</div>
	<home-page>

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
