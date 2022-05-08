<template>
	<home-page>
		<div class="bg-lightPurplebg min-h-screen px-5 py-8 flex flex-col pb-24">
			<div class="flex justify-center items-center">
				<span class=" text-xl font-extrabold text-center">Profile</span>
				<i class="lar la-bell text-primary bg-white p-3 rounded-full ml-auto absolute right-6  "></i>
			</div>
			<img src="@/asset/images/avatar.svg" alt="profile picture" class="w-28 h-28 mx-auto mt-8">


			<span class="text-xl font-extrabold text-center mt-6">Amelia Barlow</span>

			<div class="bg-purple p-5 flex flex-col justify-center items-center rounded-3xl mt-4">
				<span class="text-xl text-white font-bold text-center">Refer a friend and earn 2.5% from their first task</span>
				<button class="font-medium bg-white text-purple text-xs py-2 px-4 rounded-full mt-2 w-fit">Copy referral code</button>
			</div>	

		
		</div>
	</home-page>
	
</template>

<script setup>
import { useUser } from '../composables/useGlobal'
import homePage from '../layouts/homePage.vue'

console.log(useUser().user.value)


</script>


