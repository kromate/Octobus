<template>
	<transition name="slideDown" appear>
		<div class="w-screen  shadow-modal bg-white  z-40 fixed top-0 p-4" v-show="open">
			<div class="flex items-center justify-center bg-secondary text-white -mx-4 p-4 -mt-4">
				<p class="font-medium  text-base">
					Select destination
				</p>
				<i class="fas fa-times text-2xl cursor-pointer absolute right-2" @click="toggleModal"></i>
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

				<!-- <button  class="btn w-full mt-5" type="submit">Find closest Bus stop</button> -->
			</form>
		</div>

	</transition>

	<transition name="slide" appear>
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

	<div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[16px]', ' px-4 pt-4 z-30 fixed bottom-16  inset-x-0 bg-white justify-between w-full transition-all duration-500 ' ]" >
		<div :class="[ open?'hidden':'',  'w-14 h-1.5 rounded bg-lightGray mx-auto']"/>
		
		<transition name="slideUp" appear>
			<div class='bg-blue border text-primary font-extrabold py-4 rounded-lg mt-4' v-if="true">
				<!-- <i class="fas fa-times text-secondary text-right text-xl cursor-pointer" @click="offDetails"></i> -->
				<div class=" px-3 flex  items-center ">
					<div class='flex flex-col'>
						<div class="flex flex-col">
							<span class="mt-2">	Route: <b class=" text-green-900 font-normal">Route: Iju ishaga</b> </span>
							<span class="mt-2">	Route: <b class=" text-green-900 font-normal">Route: Iju ishaga</b> </span>
							<span class="mt-2">	Route: <b class=" text-green-900 font-normal">Route: Iju ishaga</b> </span>
							<span class="mt-2">	Route: <b class=" text-green-900 font-normal">Route: Iju ishaga</b> </span>
							<!-- <span class="mt-2">	Route: <b class=" text-green-900 font-normal">{{startDistance.route}}</b> </span>
							<span class="mt-2">	bus stop: <b class=" text-green-900 font-normal">{{startDistance.end_address}}</b> </span>
							<span class="mt-2">	Time taken: <b class=" text-green-900 font-normal">{{startDistance.duration.text}}</b> </span>
							<span class="mt-2">	Distance: <b class=" text-green-900 font-normal">{{startDistance.distance.text}} </b> </span> -->
						</div>
						<!-- <button class="text-white  rounded px-4 bg-secondary  mt-3 py-1.5 w-full" @click="onAddAlert(startDistance)"  > 
							set Alert
						</button> -->
					</div>
				</div>
			</div>
		</transition>


		<div class="w-full py-6">
			<button  class="btn w-full " @click="getClosestBusStop()">Find closest Bus stop</button>
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

			addAlert({
				'busStop' : data.end_address,
				'Route' : data.route,
				'timeTaken' : data.duration.text,
				'distance' : data.distance.text,
				'Ecord': data.cord,
				'Scord': `${currLocation.value.results[0].geometry.location.lat()},${currLocation.value.results[0].geometry.location.lng()}`
			})
			offDetails()
		}

		// const onGetClosestBusStop = ()=>{
		// 	getClosestBusStop()
		// 	toggleModal()
		// }
		
		const open = ref(false)
		const toggleModal = ()=> open.value = !open.value
		const offDetails = ()=> startDistance.value = ''
		return {open, toggleModal, exactLoc, getClosestBusStop, endDistance, startDistance, offDetails, onAddAlert	}
	}
}
</script>

<style scoped>


  .slideDown-enter-from,
  .slideDown-leave-to {
	transform: translateY(-300px)
  }

  .slideDown-enter-active,
  .slideDown-leave-active {
    transition: all 0.5s ease;
  }

  .slideUp-enter-from,
.slideUp-leave-to{
	transform: translateX(-30rem);
	opacity: 0;
}

.slideUp-enter-active, .slideUp-leave-active{
	transition: all 0.5s ease;
}


</style>