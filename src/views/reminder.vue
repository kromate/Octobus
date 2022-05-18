<template>
	<home-page>
		<Topbar name="Bus alerts"/>
		<div class="py-4">
			<empty-state v-if="!Alert.length"/>
			<active-state v-else/>
		</div>
	</home-page>

</template>

<script>
import emptyState from '../components/alerts/emptyState.vue'
import activeState from '../components/alerts/activeState.vue'
import HomePage from '../layouts/homePage.vue'
import { Alert } from '../composables/useAlert'
import Topbar from '@/components/Topbar.vue'

export default {
	name:'AlertPage',
	components:{
		emptyState,
		activeState,
		HomePage,
		Topbar
	},
	setup(){
		
		return{Alert}
	}

}
</script>

<style>

</style>