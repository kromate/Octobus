<template>
	<div class="w-screen h-screen  items-center flex flex-col">
		<h1 class='text-xl text-primary mb-4 mt-10 font-bold'> Create account </h1>
		<p class='text-primary mb-4'> Get to every class on time with Octubus! </p>

		<form @submit.prevent="registerEmail" class="mt-4 mx-4">
     
			<input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Email" type="email" name="email" v-model="email" required>

			<input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Password" type="password" name="password" v-model="password" required>


			<button class="w-full mt-4 p-3 text-center rounded-xl bg-primary text-white">Sign up</button>

			<div class='text-base text-red-700 my-4' v-if="error">{{ error }}</div>
		</form>

		<button class="mt-12 mx-auto p-3 px-12 text-center rounded-xl bg-secondary text-white" @click="googleAuth"> register with Google </button>
		<p class='mt-28' >  Already have an acc?
			<router-link to="/login" class='!text-secondary' > Login  </router-link> 
		</p>


	</div>
</template>
<script>
import {useLogin, signOutUser} from '@/firebase/auth'
import { useUser } from '@/composables/useGlobal'
export default {
	name:'signUp',
	setup() {
		const {user} = useUser()
		const {googleAuth, email, password, error, registerEmail} = useLogin()
		return{user, googleAuth, signOutUser, email, password, error, registerEmail}
	}

}
</script>