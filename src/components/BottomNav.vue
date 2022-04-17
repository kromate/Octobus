<template>
	<nav class="z-50 fixed bottom-0 inset-x-0 bg-lightGray h-[7vh] flex justify-between w-full text-gray duration-300 transition-all">

		<router-link to="/"  class="w-full block py-5 px-3 text-center  duration-200 transition-all ease-in"> 
			<i class="fas fa-home text-primary text-xl mx-auto"></i>
		</router-link>

		<router-link to="/alert" class="w-full block py-5 px-3 text-center duration-300 transition-all">
			<i class="fa-solid fa-bell text-primary text-xl mx-auto "></i>
		</router-link>


	</nav>
</template>

<script>
export default {
	name:'BottomNav',
  
}
</script>

<style>


.router-link-exact-active{

  @apply   border-t-2  border-primary text-primary
}
</style>