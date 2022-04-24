<template>
	<transition name="slideDown">
		<div class="w-screen  shadow-modal bg-white  z-40 fixed top-0 p-4" v-show="open">
			<div class="flex items-center">
				<i class="fas fa-times text-primary text-left text-2xl cursor-pointer" @click="toggleModal"></i>
				<p class="font-bold ml-8 text-xl">
					Select destination
				</p>
			</div>
			<form @submit.prevent="getClosestBusStop" class="mb-12">
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
	
			<div class="overflow-y-auto h-[60vh] pb-20">
				<transition name="slideDown">
					<div class='bg-secondary text-white py-4 rounded-lg' v-if="startDistance">
						<div class=" px-3 flex  items-center ">
							<div class="md:mr-12 mr-4">
								<i class="fas fa-location-arrow md:text-7xl text-4xl text-white rounded-full p-2 bg-green-800"></i>
							</div>
				
							<div class='flex flex-col'>
								<p>
									The closest bus Stop to your Start location is  <b class="font-extrabold text-xl text-green-200">{{startDistance.name}} </b> using the  <b class="font-extrabold text-xl text-green-200"> {{startDistance.route}} </b> route at appromixamtely <b class="font-extrabold text-xl text-green-200">{{Math.round(startDistance.distance)}} km </b> away from you
								</p>
								<button class="text-primary  rounded px-4 bg-white  mt-3 py-1.5 w-72"  > 
									view on map
								</button>
							</div>
						</div>
					</div>
				</transition>

				<transition name="slideDown">
					<div class='bg-green-800 text-white py-4 rounded-lg mt-4' v-if="endDistance">
						<div class=" px-3 flex  items-center ">
							<div class="md:mr-12 mr-4">
								<i class="fas fa-map-marker md:text-7xl text-4xl text-white rounded-full p-2 bg-secondary"></i>
							</div>
				
							<div class='flex flex-col'>
								<p>
									The closest bus Stop to your End location is  <b class="font-extrabold text-xl text-green-200">{{endDistance.name}} </b> using the  <b class="font-extrabold text-xl text-green-200"> {{endDistance.route}} </b> route at appromixamtely <b class="font-extrabold text-xl text-green-200">{{Math.round(endDistance.distance)}} km </b> away from your end location
								</p>
								<button class="text-primary rounded px-4 bg-white   mt-3 py-1.5 w-72"  > 
									view on map
								</button>
							</div>
						</div>
					</div>
				</transition>
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
import { computed, ref } from '@vue/reactivity'
import { currLocation } from '../composables/useMap'
import {getClosestBusStop, endDistance, startDistance} from '../composables/useDistance'
 


export default {
	Name: 'BottomModal',
	setup(){
		const exactLoc = computed(()=>{
			if(currLocation.value){
				return currLocation.value.results[0].formatted_address
			}
			
		})
		const open = ref(false)
		const toggleModal = ()=> open.value = !open.value
		return {open, toggleModal, exactLoc, getClosestBusStop, endDistance, startDistance	}
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
    transition: opacity 1s ease;
  }
</style>