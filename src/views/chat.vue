<template>
	<home-page>
		<div class="mt-20 px-4 overflow-hidden">
			<div class="flex items-center justify-between">
				<p>Get Realtime Update on various Routes</p>
				<button class="btn py-1 px-3 text-sm" @click="openPostModal" v-if="user">
					post update
				</button>
			</div>
	
			<select-menu placeholder='Pick a route'  :options="routeNamesOnly"  class="mb-1">
				<template #icon>
					<i class="fas fa-directions text-primary text-xl"></i>
				</template>
			</select-menu>

			<div class="overflow-y-auto h-[70vh] pb-6 pt-15" v-if="chatRouteRef">
				<div class="p-3.5 bg-red-100 mt-3.5 rounded-md" v-for="n in 10" :key="n">
					<div class="flex items-start">
						<img src="../assets/people/1.png" alt="person" class="rounded-full mr-4">
						<div>
							<div class="">
								there is going to be delay at the Nicosia 1 route, I have been here for hours no bus
							</div>
							<span class="text-xs italic">Date: 3 mins ago</span>
						</div>
			
					</div>
				</div>
			</div>
		
		</div>
	</home-page>
	

</template>

<script>
import {modalController} from '../composables/useModal'
import SelectMenu from '../components/SelectMenu.vue'
import {routeNamesOnly} from '../helpers/busRoutes'
import HomePage from '../layouts/homePage.vue'
import { useUser } from '@/composables/useGlobal'
import {chatRouteRef} from '@/firebase/firestore' 
export default {
	name:'AlertPage',
	components:{
		SelectMenu,
		HomePage
	},
	setup() {
		const { user } = useUser()
		const { openPostModal} = modalController()
		return { routeNamesOnly, openPostModal, user, chatRouteRef}
	}

}
</script>

<style>

</style>