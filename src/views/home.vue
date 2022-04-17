<template>

	<div ref="mapDiv" class="map fixed top-12 bottom-12 86vh" />
	
	<bottom-modal/>
</template>



<script>
/* eslint-disable no-undef */

import {ref, onMounted} from 'vue'

import { initMap } from '../composables/useMap'

import BottomModal from '../components/BottomModal.vue'

export default {
	name: 'App',
	components: { BottomModal },
	setup() {

		
		  const mapDiv = ref(null)
		  onMounted(initMap(mapDiv))

	
		  return { mapDiv}
	
	}
}
</script>


<style>
.map{
  height: calc(100vh - 96px);
}


</style>
