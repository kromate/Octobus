<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-center flex shadow px-4 py-2 md:px-8">
		<i class="fas fa-arrow-left text-xl absolute left-4" @click="$router.go(-1)"></i>
		<h3 class="text-base font-medium">
			{{chatRouteRef}}
		</h3>
	
		<i class="fas fa-info-circle text-xl absolute right-4" focusable="false" aria-hidden="true" @mouseenter="enableRule" @mouseleave="disableRule"></i>

	</div>

	<transition name="slideDown" appear>
		<div class="bg-white shadow z-40 text-secondary fixed p-4 top-16 right-0 whitespace-pre-wrap tracking-wide flex flex-col" v-if="showRule">
			<h4 class="text-xl font-bold mb-3">Rules and Regulations ⚠️ </h4>

			1. Messages sent must only be for the purpose of updating or informing other students about the buses and it’s routes. <br>

			<span class="my-3">
				2. Abusive or Vulagar words will not be tolorated and be followed by an account deletion. <br>
			</span>	

			3. Messages disappear after 24hours to prevent too much noise on the platform. <br>
		</div>
	</transition>


	<home-page :bottom="false">
		<div class="bg-lightPurplebg min-h-screen  py-8 flex flex-col pb-24 mt-10 overflow-y-auto">
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
			<input type="text" class="input bg-[#F3F4F7]" placeholder="Type Message" v-model="message">
			<button class="btn px-3 w-11 h-11" @click="send">
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
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import {usePost} from '@/composables/usePost'

const {postModalRoute, message, send} = usePost()

chatRouteRef.value = useRoute().params.id
postModalRoute.value = useRoute().params.id
onMounted(getRouteMessage(chatRouteRef.value))
const formatTime = (time)=>{
	return time.split(' ').slice(4, 5).join(' ')
}
const { user } = useUser()

const showRule = ref(false)

const enableRule = ()=> showRule.value = true
const disableRule = ()=> showRule.value = false


</script>

<style scoped>
  .slideDown-enter-from,
  .slideDown-leave-to {
	transform: translateY(-300px)
  }

  .slideDown-enter-active,
  .slideDown-leave-active {
    transition: all 0.35s ease;
  }
</style>