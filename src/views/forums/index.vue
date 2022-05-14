<template>

	<home-page>
		<topbar name="Forums"/>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24 mt-10">
			<div 
				@click="$router.push(`/forums/${n}`)"
				class="flex items-center justify-between py-3.5 border-b border-lightGray px-4 gap-4" 
				v-for="n in routeNamesOnly" :key="n">
				<span
					class="flex items-center justify-center uppercase bg-primary h-12 w-12 text-white font-medium text-2xl rounded-lg"
				>
					<span>{{ n[0] }}</span>
				</span>
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


