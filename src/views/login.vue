<template>
	<home-page>
		<div class="w-screen h-screen  items-center flex flex-col mt-12 px-6">
			<h1 class='text-3xl text-primary mb-4 mt-10 font-bold'> Welcome Back !</h1>
			<p class='text-primary mb-4'> Login to continue </p>

			<form @submit.prevent="loginEmail" class="mt-4  w-full">
				<div class="flex flex-col w-full">
					<label for="email">Email</label>
					<input class="w-full rounded-lg p-3 bg-lightGray text-gray my-3 py-4" placeholder="Email" type="email" name="email" v-model="email" required>
				</div>
				<div class="flex flex-col w-full mt-4">
					<label for="password">Password</label>
					<input class="w-full rounded-lg p-3 bg-lightGray text-gray my-3 py-4" placeholder="Password" type="password" name="password" v-model="password" required>
				</div>
		
				<button class="w-full mt-4 p-3 text-center rounded-lg bg-secondary h-12 text-white"> Login </button>

				<div class='text-base text-red-700 my-4' v-if="error">{{ error }}</div>
			</form>


			<button class="w-full flex items-center justify-center mt-4 p-3 text-center rounded-lg bg-transparent h-12 text-primary border" @click="googleAuth"> 
				<i class="fas fa-google text-primary text-2xl  "></i>
				login with Google </button>
			<p class='mt-28' >  Don’t have an account? 
				<router-link to="/signup" class='!text-secondary' > Create account  </router-link> 
			</p>
		</div>
	</home-page>

</template>

<script>
import {useLogin, signOutUser} from '@/firebase/auth'
import { useUser } from '@/composables/useGlobal'
import homePage from '../layouts/homePage.vue'


export default {
	components: { homePage },
	name:'loginPage',
	setup() {
		const {user} = useUser()
		const {googleAuth, email, password, error, loginEmail} = useLogin()
		return{user, googleAuth, signOutUser, email, password, error, loginEmail}
	}
}
</script>