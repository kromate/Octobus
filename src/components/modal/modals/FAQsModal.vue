<template>
	<Modal v-if="showModal">
		<div class=" bg-white max-w-[89%] md:w-7/12 w-full   py-5 px-5 md:rounded-xl rounded-md z-[10000] ">
			<div class="flex flex-col w-full h-full justify-between">
				<div class="flex items-center justify-center w-full border-b pb-3 border-secondary">
					<h2 class="font-semibold text-2xl text-center ">
						FAQs
					</h2>
					<div 	class="cursor-pointer absolute right-4 top-2" @click="close">
						<i class="fas fa-times text-primary text-2xl"></i>
					</div>
				</div>

	
		
				<div class="flex flex-col  w-full justify-center items-center">
		
			
					<details class="max-w-[85%] bg-blue rounded-xl mt-5 w-[55rem]">
						<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg">Are the buses available at all hours?
							<button class="ml-auto">
								<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
							</button>
						</summary>
						<div class="mt-4 leading-normal text-sm px-6 mb-8 ">No, Check the school official website to find out more</div>
					</details>
					<details class="max-w-[85%] bg-blue rounded-xl mt-5 w-[55rem]">
						<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg"> Who can benefit from Near East University shuttle services? 
							<button class="ml-auto">
								<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
							</button>
						</summary>
						<div class="mt-4 leading-normal text-sm px-6 mb-8 ">All of our students who are registered to our university, have a current student certificate or a student ID with a semester stamp on it can use our university services.</div>
					</details>
					<details class="max-w-[85%] bg-blue rounded-xl mt-5 w-[55rem]">
						<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg"> Are shuttle services paid? 
							<button class="ml-auto">
								<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
							</button>
						</summary>
						<div class="mt-4 leading-normal text-sm px-6 mb-8 ">The school provides free shuttle service for its students.</div>
					</details>
				</div>
		
	
		
			</div>
		</div>
	</Modal>
</template>

<script>

import Modal from '../index.vue'

export default {
	name: 'FAQsModal',
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