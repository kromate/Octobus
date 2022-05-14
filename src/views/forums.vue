<template>
	<home-page>
		<div class="mt-20 px-4 overflow-hidden min-h-screen">
			<div class="flex items-center justify-between">
				<p>Get real-time updates on various routes from your peers</p>
				<button class="btn py-1 px-3 text-sm" @click="openPostModal" v-if="user">
					post update
				</button>
			</div>
	
			<select-menu placeholder='Pick a route' @onChange="chatRouteRef = $event"  :options="routeNamesOnly"  class="mb-1">
				<template #icon>
					<i class="fas fa-directions text-primary text-xl"></i>
				</template>
			</select-menu>
			<div v-if="chatRouteRef">
				<div class="overflow-y-auto h-[70vh] pb-6 pt-15" v-if="routeMessage.length">
					<div class="p-3.5 bg-red-100 mt-3.5 rounded-md" v-for="n in routeMessage" :key="n">
						<div class="flex items-center">
							<img :src="n.user.photo" alt="person" class="rounded-full mr-4 w-16" v-if="n.user.photo">
							<avatar v-else :name="n.user.name.split('@')[0]"  :size="64" class="mr-4"/>
							<div>
								<p class="bg-secondary text-white w-auto px-4 py-0.5 rounded" v-if="n.user">{{n.user.name}}</p>
								<div class="">
									{{n.post}}

								</div>
								<span class="text-xs italic trim ">Date: {{formatTime(n.date) }}</span>
							</div>
			
						</div>
					</div>
				</div>

				<div class="flex justify-center items-center h-96" v-else>
					<p class="text-xl text-center md:text-3xl">This Route has no update yet</p>
				</div>
			</div>
		

			<div class="flex justify-center items-center h-96" v-else>
				<p class="text-2xl text-center md:text-4xl">Select a Route to view updates</p>
			</div>
		
		</div>
	</home-page>
	

</template>

<script setup>
import {modalController} from '../composables/useModal'
import SelectMenu from '../components/SelectMenu.vue'
import avatar from '@/components/Avatar.vue'
import {routeNamesOnly} from '../helpers/busRoutes'
import HomePage from '../layouts/homePage.vue'
import { useUser } from '@/composables/useGlobal'
import {chatRouteRef, routeMessage, getRouteMessage} from '@/firebase/firestore' 
import { onMounted } from 'vue'

onMounted(getRouteMessage(routeNamesOnly[0]))
const formatTime = (time)=>{
	return time.split(' ').slice(0, 5).join(' ')
}
const { user } = useUser()
const { openPostModal} = modalController()



</script>

<style>

</style>