<template>
	<home-page>
		<div class="bg-lightPurplebg min-h-screen px-5 py-8 flex flex-col pb-24" v-if="useUser().user.value">
			<div class="flex justify-center items-center">
				<span class=" text-xl font-extrabold text-center">Profile</span>
				<i class="lar la-bell text-primary bg-white p-3 rounded-full ml-auto absolute right-6  "></i>
			</div>
			<img :src="useUser().user.value.photoURL" alt="profile picture" class="w-28 h-28 mx-auto mt-8 rounded-full">


			<span class="text-xl font-extrabold text-center mt-6">{{useUser().user.value.displayName}}</span>

			<div class="bg-secondary p-5 flex flex-col justify-center items-center rounded-3xl mt-4 max-w-[80%] w-[400px] mx-auto">
				<button class="font-medium bg-white text-purple text-xs py-2 px-4 rounded-full mt-2 w-fit cursor-pointer" @click="resetPassword">Change Password</button>
			</div>	
		</div>

		<div v-else class="mt-36">
			<p class="text-center">
				You need to sign in to view profile
			</p>
			
		</div>
	</home-page>
	
</template>

<script setup>
import { useUser } from '../composables/useGlobal'
import { useAlert } from '../composables/useNotification'
import homePage from '../layouts/homePage.vue'

const resetPassword = ()=>{
	useAlert().openAlert(`Password reset link sent to ${useUser().user.value.email}`)
}


</script>


