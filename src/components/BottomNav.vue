<template>
	<nav class="z-50 fixed bottom-0 inset-x-0 bg-lightGray h-[7vh] flex justify-between w-full text-gray duration-300 transition-all">

		<router-link to="/"  class="w-full block py-5 px-3 text-center  duration-200 transition-all ease-in"> 
			<i class="fas fa-home text-primary text-2xl mx-auto"></i>
		</router-link>

		<router-link to="/alert" class="w-full block py-5 px-3 text-center duration-300 transition-all relative">
			<i class="fas fa-bell text-primary text-2xl mx-auto "></i> 
			<span v-if="Alert.length" class="bg-secondary border-2  rounded-full text-xs w-5 text-white h-5 absolute flex justify-center items-center top-3 left-[50%]">
				{{Alert.length}}
			</span>
			
		</router-link>
		<router-link to="/chat" class="w-full block py-5 px-3 text-center duration-300 transition-all">
			<i class="fas fa-comment text-primary text-2xl mx-auto "></i>
		</router-link>


	</nav>
</template>

<script>
import { Alert } from '../composables/useAlert'
export default {
	name:'BottomNav',

	setup(){
		return{Alert}
	}
  
}
</script>

<style>


.router-link-exact-active{

  @apply   border-t-2  border-secondary text-primary
}
</style>