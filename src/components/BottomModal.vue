<template>
	<transition name="slideDown" appear>
		<div class="w-screen  shadow-modal bg-white  z-40 fixed top-0 p-4" v-show="open">
			<div class="flex items-center">
				<i class="fas fa-times text-primary text-left text-2xl cursor-pointer" @click="toggleModal"></i>
				<p class="font-bold ml-8 text-xl">
					Select destination
				</p>
			</div>
			<form @submit.prevent="onGetClosestBusStop" class="mb-12">
				<div class="flex items-center mt-3 w-full" >
					<div class="flex flex-col h-full items-center mr-3">
						<div class="border-[7px] border-green-800 rounded-full w-6 h-6"/>
						<div class="h-full min-h-[20px] border border-[#c6c2c2] bg-[#c6c2c2] w-0 my-0.5"/>
						<div class="border-[7px] border-red-800 rounded-full w-6 h-6"/>
					</div>
					<div class="flex flex-col w-full">
						<input type="text" placeholder="Your Location" v-model="exactLoc" class="input" disabled>
						<input type="text" placeholder="Search Location" class="mt-2 input" id="autocomplete" ref="autocompleteInput" required>
					</div>
				</div>

				<button  class="btn w-full mt-5" type="submit">Find closest Bus stop</button>
			</form>
	
		
	
		</div>

	</transition>

	<transition name="slideDown" appear>
		<div class='bg-[#ffffffbe] border text-secondary py-4 rounded absolute top-[75px] left-5 w-[90%] max-w-[25rem] pt-9' v-if="startDistance">
			<i class="fas fa-times text-secondary text-right text-xl cursor-pointer absolute right-4 top-2" @click="offDetails"></i>
			<div class=" px-3 flex  items-center ">
				<div class='flex flex-col'>
					<div class="flex flex-col">
						<span class="mt-2">	Route: <b class=" text-green-900 font-extrabold">{{startDistance.route}}</b> </span>
						<span class="mt-2">	bus stop: <b class=" text-green-900 font-extrabold">{{startDistance.end_address}}</b> </span>
						<span class="mt-2">	Time taken: <b class=" text-green-900 font-extrabold">{{startDistance.duration.text}}</b> </span>
						<span class="mt-2">	Distance: <b class=" text-green-900 font-extrabold">{{startDistance.distance.text}} </b> </span>
					</div>
					<button class="text-white  rounded px-4 bg-secondary  mt-3 py-1.5 w-full" @click="onAddAlert(startDistance)"  > 
						set Alert
					</button>
				</div>
			</div>
		</div>
	</transition>

	<div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[4px]', 'px-3 z-30 fixed  py-4 bottom-12  inset-x-0 bg-white justify-between w-full animated ' ]" >
		<div :class="[ open?'hidden':'',  'w-14 h-1.5 rounded bg-gray mx-auto']"/>
	
		<div class="relative" @click="toggleModal">
			<i class="fas fa-search text-primary text-left text-lg w-8 h-8 bg-[#b3b3bc80] rounded-full flex justify-center items-center absolute top-2.5 left-3"></i>
			<div  class="w-full rounded-md p-3 bg-lightGray pl-14  mt-4 mb-2 font-bold" > Where to ?</div>
		</div>

	
	</div>
</template>

<script>
import { computed,ref } from '@vue/reactivity'
import { currLocation } from '../composables/useMap'
import { addAlert } from '../composables/useAlert'
import {getClosestBusStop, endDistance, startDistance} from '../composables/useDistance'
 


export default {
	Name: 'BottomModal',
	setup(){
		const exactLoc = computed(()=>{
			if(currLocation.value){
				return currLocation.value.results[0].formatted_address
			}
		})

		const onAddAlert = (data)=>{
			console.log(data)
			// addAlert({
			// 	'Bus Stop' : data
			// })
		}

		const onGetClosestBusStop = ()=>{
			getClosestBusStop()
			toggleModal()
		}
		
		const open = ref(false)
		const toggleModal = ()=> open.value = !open.value
		const offDetails = ()=> startDistance.value = ''
		return {open, toggleModal, exactLoc, onGetClosestBusStop, endDistance, startDistance, offDetails, addAlert	}
	}
}
</script>

<style scoped>
/* .animated{
transition: all 0.35s ease;
} */

  .slideDown-enter-from,
  .slideDown-leave-to {
	transform: translateY(-3000px)
  }

  .slideDown-enter-active,
  .slideDown-leave-active {
    transition: opacity 10s ease;
  }
</style>