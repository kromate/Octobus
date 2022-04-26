<template>
	<home-page>
		<div class="py-4">
			<empty-state v-if="true"/>
			<active-state v-else/>
		</div>
	</home-page>

</template>

<script>
import emptyState from '../components/alerts/emptyState.vue'
import activeState from '../components/alerts/activeState.vue'
import HomePage from '../layouts/homePage.vue'
export default {
	name:'AlertPage',
	components:{
		emptyState,
		activeState,
		HomePage
	},
	setup() {
	
        
		return { }
	}

}
</script>

<style>

</style>