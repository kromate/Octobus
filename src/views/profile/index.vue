<template>
	<topbar name="Profile"/>
	<home-page>
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24" v-if="useUser().user.value">
			<div class="flex items-center py-4 border-b border-lightGray px-4 mt-10 gap-4">
				<img :src="useUser().user.value.photoURL" v-if="useUser().user.value.photoURL" alt="profile picture" class="w-8 h-8  rounded-full">
				<avatar v-else :name="useUser().user.value.email.split('@')[0]" class="w-8 h-8   rounded-full" :size="32"/>
				<span>{{useUser().user.value.email}}</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4" @click="$router.push('/profile/edit')">
				<i class="fas fa-edit  text-2xl"></i>
				<span class="text-base font-normal">Edit profile</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4" @click="$router.push('/profile/about')">
				<i class="fas fa-info-circle  text-2xl"></i>
				<span class="text-base font-normal">About</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4" @click="$router.push('/profile/faq')">
				<i class="fas fa-comments  text-2xl"></i>
				<span class="text-base font-normal">FAQs</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4" @click="$router.push('/profile/contact')">
				<i class="fas fa-envelope  text-2xl"></i>
				<span class="text-base font-normal">Contact us</span>
			</div>

			<div class="flex items-center py-4 border-b border-lightGray px-4 gap-4 cursor-pointer" @click="logout">
				<i class="fas fa-sign-out-alt  text-2xl"></i>
				<span class="text-base font-normal">Log out</span>
			</div>
	
		</div>



		<div v-else class="mt-36">
			<Vue3Lottie :animation-data="animation" :height="200" :width="200" />
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
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import animation from '@/assets/animation/auth.json'
import { useUser } from '@/composables/useGlobal'
import homePage from '@/layouts/homePage.vue'
import Avatar from '@/components/Avatar.vue'
import Topbar from '@/components/Topbar.vue'
import { useRouter } from 'vue-router'


const Router = useRouter()
const logout = ()=>{
	useUser().clearUser()
	Router.push('/login')
}

// const resetPassword = ()=>{
// 	useAlert().openAlert(`Password reset link sent to ${useUser().user.value.email}`)
// }


</script>


