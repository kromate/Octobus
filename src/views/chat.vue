<template>
	<div class="mt-20 px-4">
		<p>Get Update on various Routes</p>
		<select-menu placeholder='route' >
			<template #icon>
				<i class="fas fa-directions text-primary text-base"></i>
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
	
        
		return { }
	}

}
</script>

<style>

</style>