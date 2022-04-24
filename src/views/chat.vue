<template>
	<div class="mt-20 px-4 overflow-hidden">
		<div class="flex items-center justify-between">
			<p>Get Realtime Update on various Routes</p>
			<button class="btn py-1 px-3 text-sm" @click="openAboutModal">
				post update
			</button>
		</div>
	
		<select-menu placeholder='route'  :options="routeNamesOnly"  class="mb-1">
			<template #icon>
				<i class="fas fa-directions text-primary text-xl"></i>
			</template>
		</select-menu>
		<div class="overflow-y-auto h-[60vh] pb-20 pt-15">
			<div class="p-3.5 bg-red-100 mt-3.5 rounded-md" v-for="n in 10" :key="n">
				<div class="flex items-start">
					<img src="../assets/people/1.png" alt="person" class="rounded-full mr-4">
					<div>
						<div class="">
							there is going to be delay at the Nicosia 1 route, I have been here for hours no bus
						</div>
						<span class="text-xs italic">Date: 3 mins ago</span>
					</div>
			
				</div>
			</div>
		</div>
		
	</div>

</template>

<script>

import SelectMenu from '../components/SelectMenu.vue'
import {routeNamesOnly} from '../helpers/busRoutes'
export default {
	name:'AlertPage',
	components:{
		SelectMenu
	},
	setup() {
	
        
		return { routeNamesOnly}
	}

}
</script>

<style>

</style>