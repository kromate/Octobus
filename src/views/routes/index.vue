<template>

	<home-page>
		<topbar name="Routes"/>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24 mt-10">
			<div 
				@click="$router.push(`/routes/${n}`)"
				class="flex items-center justify-between py-3.5 border-b border-lightGray px-4 gap-4" 
				v-for="n in routeNamesOnly" :key="n">
				<span class="text-base font-normal">{{n}}</span>
				<i class="fas fa-arrow-right  text-2xl"></i>
			</div>
		</div>
	</home-page>
	
</template>

<script setup>

import homePage from '@/layouts/homePage.vue'
import Topbar from '@/components/Topbar.vue'
import { routeNamesOnly } from '@/helpers/busRoutes'





</script>


