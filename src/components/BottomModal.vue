<template>
	<transition name="slideDown" appear>
		<div class="w-screen  shadow-modal bg-white  z-40 fixed top-0 p-4" v-show="open">
			<div class="flex items-center justify-center bg-secondary text-white -mx-4 p-4 -mt-4">
				<p class="font-medium  text-base">
					Select destination
				</p>
				<i class="fas fa-times text-2xl cursor-pointer absolute right-2" @click="toggleModal"></i>
			</div>
			<form @submit.prevent="onGetClosestBusStop" >
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


	<div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-2xl', 'px-4 pt-3 z-30 fixed bottom-[60px] inset-x-0 bg-white justify-between w-full transition-all duration-500 ' ]" >
		<div class="w-14 h-1.5 rounded bg-lightGray mx-auto"/>
		
		<transition name="slideUp" appear>
			<div class='bg-blue border text-primary font-bold py-4 rounded-lg mt-4' v-if="startDistance">
				<div class=" px-3 flex  items-center ">
					<div class='flex flex-col'>
						<div class="flex flex-col">
							<span class="mt-2">	Route: <b class=" text-green-900 font-normal">{{startDistance.route}}</b> </span>
							<span class="mt-2 flex">	bus stop: <b class=" text-green-900 font-normal truncate w-64 ml-2">{{startDistance.end_address}}</b> </span>
							<span class="mt-2">	Time taken: <b class=" text-green-900 font-normal">{{startDistance.duration.text}}</b> </span>
							<span class="mt-2">	Distance: <b class=" text-green-900 font-normal">{{startDistance.distance.text}} </b> </span>
							<span class="mt-2">Next arrival: <b class=" text-green-900 font-normal">{{startDistance.estimatedTime}}</b> </span>
						</div>
				
					</div>
				</div>
			</div>
		</transition>


		<div class="w-full py-6" v-if="!startDistance">
			<div class="relative" @click="toggleModal">
				<i class="fas fa-map-marker text-primary text-left text-lg w-8 h-8 bg-[#b3b3bc4c] rounded-full flex justify-center items-center absolute top-2.5 left-3"></i>
				<div  class="w-full rounded-md p-4 bg-lightGray pl-14 font-bold" >Where are you going?</div>
			</div>
		</div>
		<div class="w-full py-6 gap-4 flex items-stretch" v-else>
			<button  class="btn-outline w-full " @click="openMaps(item)" >Directions</button>
			<button  class="btn w-full " @click="onAddAlert(startDistance)" > save</button>
			<button  class="btn  h-auto w-auto px-4"  @click="offDetails()">
				<i :class="`fas fa-${startDistance ? 'eye-slash': 'eye'} `" ></i>
			</button>
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
				'index' : data.index,
				'timeTaken' : data.duration.text,
				'distance' : data.distance.text,
				'Ecord': data.cord,
				'Scord': `${currLocation.value.results[0].geometry.location.lat()},${currLocation.value.results[0].geometry.location.lng()}`
			})
			offDetails()
		}

		const onGetClosestBusStop = ()=>{
			getClosestBusStop()
			toggleModal()
		}
		
		const open = ref(false)
		const toggleModal = ()=> open.value = !open.value
		const offDetails = ()=> startDistance.value = ''
		return {open,openMaps, toggleModal, exactLoc,onAddAlert, onGetClosestBusStop, endDistance, startDistance, offDetails,}
	}
}
</script>

<style>


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

.pac-container{
position: fixed !important;
top: 15.5rem !important;
left: 0 !important;
right: 0 !important;
width: 100vw !important;
}

.pac-item, .pac-item-query{
	padding: 16px 6px !important;
	font-size: 16px !important;
}
</style>