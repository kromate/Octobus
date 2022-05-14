<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-between flex shadow px-4 py-2 md:px-8">
		<h3 class="text-base font-medium">
			Profile
		</h3>
		<i class="fas fa-plus text-xl"></i>
	
	</div>
	<home-page>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24" v-if="useUser().user.value">
			<div class="flex items-center py-4 border-b border-lightGray px-4 mt-10 gap-4">
				<img :src="useUser().user.value.photoURL" v-if="useUser().user.value.photoURL" alt="profile picture" class="w-8 h-8  rounded-full">
				<avatar v-else :name="useUser().user.value.email.split('@')[0]" class="w-8 h-8   rounded-full" :size="112"/>
				<span>{{useUser().user.value.email}}</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4">
				<i class="fas fa-edit  text-2xl"></i>
				<span class="text-base font-normal">Edit profile</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4">
				<i class="fas fa-edit  text-2xl"></i>
				<span class="text-base font-normal">About</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4">
				<i class="fas fa-edit  text-2xl"></i>
				<span class="text-base font-normal">FAQs</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4">
				<i class="fas fa-edit  text-2xl"></i>
				<span class="text-base font-normal">Contact us</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4">
				<i class="fas fa-edit  text-2xl"></i>
				<span class="text-base font-normal">Log out</span>
			</div>
	
		</div>



		<div v-else class="mt-36">
			<p class="text-center">
				You need to sign in to view profile
			</p>
			<button class="btn  py-1 px-12 mx-auto mt-6"  @click="$router.push('/login')">
				Login
			</button>
		</div>
	</home-page>
	
</template>

<script setup>
import { useUser } from '../composables/useGlobal'
import { useAlert } from '../composables/useNotification'
import homePage from '../layouts/homePage.vue'
import Avatar from '../components/Avatar.vue'

const resetPassword = ()=>{
	useAlert().openAlert(`Password reset link sent to ${useUser().user.value.email}`)
}


</script>


