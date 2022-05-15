<template>

	<home-page>
		<topbar name="Forums"/>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24 mt-10">
			<div class="px-4 relative py-4">
				<input type="text" class="input bg-blue h-12 px-4" placeholder="Search"/>
				<i class="fas fa-search text-primary text-xl absolute top-[27px] right-8 -rotate-90"></i>
			</div>
	
			<div 
				@click="$router.push(`/forums/${n}`)"
				class="flex items-center  py-3.5 border-b border-lightGray px-4 gap-4" 
				v-for="n in routeNamesOnly" :key="n">
				<span
					class="flex items-center justify-center uppercase bg-primary h-12 w-12 text-white font-medium text-2xl rounded-lg"
				>
					<span>{{ n[0] }}</span>
				</span>
				<div class="flex flex-col">
					<span class="text-lg font-normal">{{n}}</span>
					<span class="text-sm font-medium">View discussion for the {{n}} route</span>
				</div>
		

			</div>

	
	
		</div>



	
	</home-page>
	
</template>

<script setup>

import homePage from '@/layouts/homePage.vue'
import Topbar from '@/components/Topbar.vue'
import { routeNamesOnly } from '@/helpers/busRoutes'










</script>


