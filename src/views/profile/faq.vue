<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			FAQs
		</h3>
	</div>
	<home-page>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24 mt-12 px-4" >
			<div class="flex flex-col  w-full justify-center items-center ">
		
			
				<details class="w-full bg-blue rounded-xl mt-5 ">
					<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg">Are the buses available at all hours?
						<button class="ml-auto">
							<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
						</button>
					</summary>
					<div class="mt-4 leading-normal text-sm px-6 mb-8 ">No, click on the route feature and select the route of your choice, then select schedule to know about the bus hours</div>
				</details>
				<details class="w-full bg-blue rounded-xl mt-5 ">
					<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg"> Who can benefit from Near East University shuttle services? 
						<button class="ml-auto">
							<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
						</button>
					</summary>
					<div class="mt-4 leading-normal text-sm px-6 mb-8 ">All of our students who are registered to our university, have a current student certificate or a student ID with a semester stamp on it can use our university services.</div>
				</details>
				<details class="w-full bg-blue rounded-xl mt-5 ">
					<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg"> Are shuttle services paid? 
						<button class="ml-auto">
							<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
						</button>
					</summary>
					<div class="mt-4 leading-normal text-sm px-6 mb-8 ">The school provides free shuttle service for its students.</div>
				</details>
			</div>
		</div>

	</home-page>
	
</template>

<script setup>

import homePage from '@/layouts/homePage.vue'




</script>


