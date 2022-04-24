<template>
	<div class='w-screen h-screen my-14  '> 
		<div class='border-b border-lightGray '>
			<div class="alert-card px-6 flex justify-between ">
				<div>
					<li class='list-none flex my-2'>  <img src="../../assets/icons/clock.svg" class='mr-2'/> 6:45 </li>
					<li class='list-none flex my-2'> <img src="../../assets/icons/route.svg" class='mr-2'/>  Regular Campuses </li>
					<li class='list-none flex my-2'> <i class="fa-solid fa-location-crosshairs text-primary mr-2"></i> Nicosia </li>
				</div>
				<div class='my-2'>
					<button class="text-primary border border-primary rounded px-4 bg-white hover:bg-primary hover:text-white "   @click="showModal"> 
						alert me 
					</button>
					<Modal v-show="isModalVisible" @close="closeModal" />
				</div>
			</div>
		</div>

		<div class='border-b border-lightGray '>
			<div class="alert-card px-6 flex justify-between ">
				<div>
					<span class='list-none flex my-2'>  <img src="../../assets/icons/clock.svg" class='mr-2'/> 6:45 </span>
					<span class='list-none flex my-2'> <img src="../../assets/icons/route.svg" class='mr-2'/>  Regular Campuses </span>
					<span class='list-none flex my-2'> <i class="fa-solid fa-location-crosshairs text-primary mr-2"></i> Nicosia </span>
				</div>
				<div class='my-2'>
					<button class="text-primary border border-primary rounded px-4 bg-white hover:bg-primary hover:text-white "   @click="showModal"> 
						alert me 
					</button>
					<Modal v-show="isModalVisible" @close="closeModal" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Modal from '../../components/Modal.vue'
import {  ref} from 'vue'
export default {
	components: {
		Modal,
	},
	setup(){
		const isModalVisible = ref(false)
    
		const showModal = () => {
			isModalVisible.value = true
		}

		const closeModal = () => {
			isModalVisible.value = false
		}



		return{ isModalVisible,showModal,closeModal}
	}
    
}
</script>