<template>
	<div class="mt-20 px-4">
		<div class="flex items-center justify-between">
			<p>Get Realtime Update on various Routes</p>
			<button class="btn py-1 px-3 text-sm" @click="openAboutModal">
				post update
			</button>
		</div>
	
		<select-menu placeholder='route'  :options="routeNamesOnly" class="mb-10">
			<template #icon>
				<i class="fas fa-directions text-primary text-xl"></i>
			</template>
		</select-menu>

		<div class="p-2 bg-gray mt-2 rounded">
			<span v-if="!sender">{{ name }}</span>
			<div class="flex" :class="sender ? 'flex-row-reverse' : ''">
				<img src="../assets/people/1.png" alt="person" class="rounded-full mr-4">
				<div>
					<div class="text w-3/4" :class="sender ? 'bg-green-800' : 'bg-gray-700'">
						there is going to be delay at the Nicosia 1 route, I have been here for hours no bus
					</div>
					<span class="text-xs italic">Date: 3 mins ago</span>
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