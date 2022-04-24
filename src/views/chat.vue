<template>
	<div class="mt-20 px-4">
		<div class="flex items-center justify-between">
			<p>Get Realtime Update on various Routes</p>
			<button class="btn py-1 px-3 text-sm" @click="openAboutModal">
				post update
			</button>
		</div>
	
		<select-menu placeholder='route'  :options="routeNamesOnly">
			<template #icon>
				<i class="fas fa-directions text-primary text-xl"></i>
			</template>
		</select-menu>
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