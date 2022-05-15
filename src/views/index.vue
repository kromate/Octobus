<template>
	<homePage>
		<Topbar name="Find a Bus"/>
		<div ref="mapDiv" class="map fixed top-12 bottom-12 86vh" />
		<bottom-modal/>
	</homePage>

</template>



<script setup>
/* eslint-disable no-undef */

import {ref, onMounted} from 'vue'
import { initMap } from '../composables/useMap'
import homePage from '../layouts/homePage.vue'

import BottomModal from '../components/BottomModal.vue'
import Topbar from '@/components/Topbar.vue'

		
		  const mapDiv = ref(null)
//   onMounted(initMap(mapDiv))
	


	

</script>


<style>
.map{
  height: calc(100vh - 96px);
}
.pac-icon{
	display: none;
}
.pac-item{
	padding: 10px;
	font-size: 16px;
	cursor: pointer;
}
.pac-item:hover{
background: #ececec;
}

</style>
