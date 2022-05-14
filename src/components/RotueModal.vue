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
			</form>
		</div>

	</transition>


	<div class="px-4 pt-4 z-30 fixed bottom-[60px] rounded-2xl inset-x-0 bg-white justify-between w-full transition-all duration-500" >
		<div class="w-14 h-1.5 rounded bg-lightGray mx-auto"/>
		
		<transition name="slideUp" appear>
			<div class='bg-blue border text-primary font-bold py-4 rounded-lg mt-4' v-if="startDistance">
				<div class=" px-3 flex  items-center ">
					<div class='flex flex-col'>
						<div class="flex flex-col">
							<span class="mt-2">	Route: <b class=" text-green-900 font-normal">{{startDistance.route}}</b> </span>
							<span class="mt-2">	bus stop: <b class=" text-green-900 font-normal">{{startDistance.end_address}}</b> </span>
							<span class="mt-2">	Time taken: <b class=" text-green-900 font-normal">{{startDistance.duration.text}}</b> </span>
							<span class="mt-2">	Distance: <b class=" text-green-900 font-normal">{{startDistance.distance.text}} </b> </span>
						</div>
				
					</div>
				</div>
			</div>
		</transition>


		<div class="w-full py-6" v-if="!startDistance">
			<button  class="btn w-full " @click="getClosestBusStop()" :disabled="!exactLoc">Find closest Bus stop</button>
		</div>
		<div class="w-full py-6 gap-4 flex items-center" v-else>
			<button  class="btn-outline w-full " @click="openMaps(item)" >Directions</button>
			<button  class="btn w-full " @click="offDetails()" > Close</button>
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
		const openMaps = (data) =>{

			const URL = `http://maps.google.com/maps?saddr=${startDistance.value.cord}&daddr=${currLocation.value.results[0].geometry.location.lat()},${currLocation.value.results[0].geometry.location.lng()}`
			window.open(URL,'_blank')
			console.log(data)
		}
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
		
		const open = ref(false)
		const toggleModal = ()=> open.value = !open.value
		const offDetails = ()=> startDistance.value = ''
		return {open,openMaps, toggleModal, exactLoc, getClosestBusStop, endDistance, startDistance, offDetails, onAddAlert	}
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
    transition: all 0.35s ease;
  }

  .slideUp-enter-from,
.slideUp-leave-to{
	transform: translateY(7rem);
	opacity: 0;
}

.slideUp-enter-active, .slideUp-leave-active{
	transition: all 0.35s ease;
}


</style>