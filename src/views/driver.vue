<template>
	<home-page>
		<div class="w-screen h-screen  items-center flex flex-col mt-12">
			<h1 class='text-xl text-primary mb-4 mt-10 font-bold'> Driver Check in </h1>
			<p class='text-primary mb-4'> Fill in the details to continue </p>

			<form @submit.prevent="loginEmail" class="mt-4 mx-4">
     
				<input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Enter identification pin" type="text" name="pin" v-model="pin" required>
				<input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Email" type="email" name="email" v-model="email" required>
				<input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Password" type="password" name="password" v-model="password" required>
				<select-menu placeholder='Pick a route' @onChange="chatRouteRef = $event"  :options="routeNamesOnly" :load="false"   class="mb-1">
					<template #icon>
						<i class="fas fa-directions text-primary text-xl"></i>
					</template>
				</select-menu>

				<button class="w-full mt-4 p-3 text-center rounded-xl bg-primary text-white"> Login </button>

				<div class='text-base text-red-700 my-4' v-if="error">{{ error }}</div>
			</form>


	
		</div>
	</home-page>
	
</template>

<script setup>
import homePage from '../layouts/homePage.vue'
import SelectMenu from '../components/SelectMenu.vue'
import {routeNamesOnly} from '../helpers/busRoutes'

</script>


