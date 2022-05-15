<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			{{chatRouteRef}}
		</h3>
	</div>

	<home-page :bottom="false">
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24 mt-10">
			<div v-if="routeMessage.length">
				<div 
					class="flex items-center  py-3.5 border-b border-lightGray px-4 gap-4" 
					v-for="n in routeMessage" :key="n">
					<div class="flex flex-col">
						<div class=" flex items-center gap-2">
							<span class="text-base font-normal capitalize">{{n.user.name.split('@')[0]}}</span>
							<div class="w-1.5 h-1.5 rounded-full bg-primary"/>
							<span class="text-[#5E6871] text-sm">{{formatTime(n.date) }}</span>	
						</div>
						<span class="text-lg font-medium">{{n.post}}</span>
					</div>
				</div>
			</div>
			<div class="flex justify-center items-center h-96" v-else>
				<p class="text-xl text-center md:text-3xl">This Route has no update yet</p>
			</div>
		

	
	
		</div>


		<div class="fixed inset-x-0 border-t border-[#F3F4F7] flex items-center gap-4 p-4 bottom-0 bg-white" v-if="user">
			<input type="text" class="input bg-[#F3F4F7]" placeholder="Type Message">
			<button class="btn px-3 w-11 h-11">
				<i class="fas fa-paper-plane  text-2xl mx-auto "></i>
			</button>
		</div>
	
	</home-page>
	
</template>

<script setup>

import {routeNamesOnly} from '@/helpers/busRoutes'
import HomePage from '@/layouts/homePage.vue'
import { useUser } from '@/composables/useGlobal'
import {chatRouteRef, routeMessage, getRouteMessage} from '@/firebase/firestore' 
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {usePost} from '@/composables/usePost'
chatRouteRef.value = useRoute().params.id

onMounted(getRouteMessage(routeNamesOnly[0]))
const formatTime = (time)=>{
	console.log(time)
	return time.split(' ').slice(4, 5).join(' ')
}
const { user } = useUser()




</script>


