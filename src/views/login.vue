<template>
	<div class="w-screen h-screen  items-center flex flex-col">
		<h1 class='text-xl text-primary mb-4 mt-10 font-bold'> Welcome Back </h1>
		<p class='text-primary mb-4'> Login to continue </p>

		<form @submit.prevent="loginEmail" class="mt-4 mx-4">
     
			<input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Email" type="email" name="email" v-model="email" required>

			<input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Password" type="password" name="password" v-model="password" required>


			<button class="w-full mt-4 p-3 text-center rounded-xl bg-primary text-white"> Login </button>

			<div class='text-base text-red-700 my-4' v-if="error">{{ error }}</div>
		</form>


		<button class="mt-12 mx-auto p-3 px-12 text-center rounded-xl bg-secondary text-white" @click="googleAuth"> login with Google </button>
		<p class='mt-28' >  Don’t have an account? 
			<router-link to="/signup" class='text-blue-400' > Create account  </router-link> 
		</p>
	</div>
</template>

<script>
import {useLogin, signOutUser} from '@/firebase/auth'
import { useUser } from '@/composables/useGlobal'


export default {
	setup() {
		const {user} = useUser()
		const {googleAuth, email, password, error, loginEmail} = useLogin()
		return{user, googleAuth, signOutUser, email, password, error, loginEmail}
	}
}
</script>