<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			Contact
		</h3>
	</div>
	<home-page>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24" >
			<div class="flex flex-col w-full h-full  items-center px-4">

				<div class="flex md:flex-row  flex-col gap-20 mt-12 text-xl">
					<div class="flex flex-col gap-5">
						<span> Jeremiah Godwin </span>
						<span> 	+14044035611  </span>
						<span> 	20204960@std.neu.tr</span>
					</div>

					<div class="flex flex-col gap-5">
						<span>	Julia Mayoko</span>
						<span>	+90 533 835 09 86</span>
						<span>	20166299@std.neu.edu.tr</span>	
					</div>
				</div>
			</div>
		</div>

	</home-page>
	
</template>

<script setup>

import homePage from '@/layouts/homePage.vue'




</script>


