<template>
	<div class='w-screen h-screen my-14  '> 
		<div class='border-b border-lightGray ' v-for="(item, index) in Alert" :key="item">
			<div class="alert-card px-6 flex justify-between ">
				<div>
					<!-- <li class='list-none flex my-2'>  <img src="../../assets/icons/date.svg" class='mr-2'/>  {{item.timeTaken}} </li> -->
					<li class='list-none flex my-2'>  <img src="../../assets/icons/clock.svg" class='mr-2'/>  {{item.timeTaken}} </li>
					<li class='list-none flex my-2'> <img src="../../assets/icons/route.svg" class='mr-2'/>  {{item.Route}} </li>
					<li class='list-none flex my-2'> <img src="../../assets/icons/place.svg" class='mr-2'/>  {{item.busStop}} </li>

				</div>
				<div class='my-2 flex flex-col'>
					<button class="text-primary border border-primary rounded px-4 bg-white hover:bg-primary hover:text-white "   @click="delAlert(index)"> 
						Cancel Alert
					</button>
					<button class="text-primary border border-primary rounded px-4 bg-white hover:bg-primary hover:text-white mt-2"   @click="openMaps(item)"> 
						get Directions
					</button>
					<!-- <Modal v-show="isModalVisible" @close="closeModal" /> -->
				</div>
			</div>
		</div>

	</div>
</template>

<script>

import { Alert, delAlert } from '@/composables/useAlert'

export default {

	setup(){
		const openMaps = (data) =>{
			console.log(data)
		}
		return{Alert, delAlert, openMaps}
	}
    
}
</script>