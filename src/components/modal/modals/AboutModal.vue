<template>
	<Modal v-if="showModal">
		<div class=" bg-white max-w-[89%] md:w-7/12 w-full   py-5 px-5 md:rounded-xl rounded-md z-[10000] ">
			<div class="flex flex-col w-full h-full justify-between">
				<div class="flex items-center justify-center w-full border-b pb-3 border-secondary">
					<h2 class="font-semibold text-2xl text-center ">
						About Us
					</h2>
					<div 	class="cursor-pointer absolute right-4 top-2" @click="close">
						<i class="fas fa-times text-primary text-2xl"></i>
					</div>
				</div>

	
				<p>Octopus was designed and built with the students in mind. We tried to make the platform as simple and as efficient as we possibly can. New students will benefit alot from this webapp as it will make their lives as students easier.



					Our University's Nicosia Services Are Located between 06:45 am and 8:15 pm campus – Nicosia Nicosia – Campus Serves Mutually.

					During the Week, we have hourly services between 08:00 and 18:00 in the morning between the Dormitories Zone and units within the campus.

					In addition, our School has free services to Kyrenia – Famagusta – Güzelyurt at certain times.
				</p>

		
	
		
			</div>
		</div>
	</Modal>
</template>

<script>

import Modal from '../index.vue'

export default {
	name: 'AboutModal',
	components: { Modal },
	props:{
		showModal: {
			type: Boolean,
			required: true,
			default: false
		},
		close:{
			type: Function,
			required: true,
			default: ()=>{}
		}
	},
	setup(props) {

		return {


		}
	}
}
</script>

<style>

</style>