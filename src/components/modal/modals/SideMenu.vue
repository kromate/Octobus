

<template>
	<Modal v-if="showModal">
		<div class="h-screen bg-white max-w-[89%] md:w-7/12 w-full   py-5 px-5 md:rounded-xl   fixed left-0 inset-y-0">
			<div class="flex flex-col w-full h-full justify-between">
				<div class="flex items-center justify-center w-full border-b pb-3 border-secondary">
					<h2 class="font-semibold text-2xl text-center ">
						sideMenu
					</h2>
					<div 	class="cursor-pointer absolute right-4 top-2" @click="close">
						<i class="fas fa-times text-primary text-2xl"></i>
					</div>
				</div>
			</div>
		</div>
	</Modal>
</template>

<script>

import Modal from '../index.vue'

export default {
	name: 'SideMenu',
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