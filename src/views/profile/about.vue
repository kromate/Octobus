<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			About
		</h3>
	</div>
	<home-page>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24" >
	
			<div class="flex flex-col w-full h-full justify-between px-4">
				<div class="flex items-center justify-center w-full pb-3">
					<h2 class="font-semibold text-2xl text-center ">
						About Us
					</h2>
					<div 	class="cursor-pointer absolute right-4 top-2" @click="close">
						<i class="fas fa-times text-primary text-2xl"></i>
					</div>
				</div>
				<p>Octopus was designed and built with the students in mind. We tried to make the platform as simple and as efficient as we possibly can. New students will benefit alot from this webapp as it will make their lives as students easier.
					Our University's Nicosia Services Are Located between 06:45 am and 8:15 pm campus – Nicosia Nicosia – Campus Serves Mutually.
					During the Week, we have hourly services between 08:00 and 18:00 in the morning between the Dormitories Zone and units within the campus.
					In addition, our School has free services to Kyrenia – Famagusta – Güzelyurt at certain times.
				</p>

			</div>
		</div>

	</home-page>
	
</template>

<script setup>
import homePage from '@/layouts/homePage.vue'


</script>


