<template>
	<Modal v-if="showModal">
		<div class=" bg-white max-w-[89%] md:w-7/12 w-full   py-5 px-5 md:rounded-xl rounded-md z-[10000] ">
			<div class="flex flex-col w-full h-full  items-center">
				<div class="flex items-center justify-center w-full border-b pb-3 border-secondary">
					<h2 class="font-semibold text-2xl text-center ">
						Contact
					</h2>
					<div 	class="cursor-pointer absolute right-4 top-2" @click="close">
						<i class="fas fa-times text-primary text-2xl"></i>
					</div>
				</div>

				<div class="flex md:flex-row  flex-col gap-20 mt-12 text-xl">
					<div class="flex flex-col gap-5">
						<span> Jeremiah Godwin </span>
						<span> 	+14044035611  </span>
						<span> 	20204960@std.neu.tr</span>
					</div>

					<div class="flex flex-col gap-5">
						<span>	Julia Mayoko</span>
						<span>	+90 533 835 09 86</span>
						<span>	20166299@std.neu.edu.tr</span>	
					</div>
				</div>
			
		



			

		
	
		
			</div>
		</div>
	</Modal>
</template>

<script>

import Modal from '../index.vue'

export default {
	name: 'ContactModal',
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
			default: ()=>{console.log('defaulter')}
		}
	},
	setup() {



	
		return {


		}
	}
}
</script>

<style>

</style>