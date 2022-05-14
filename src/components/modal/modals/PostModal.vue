<template>
	<Modal v-if="showModal">
		<div class="h-auto bg-white max-w-[89%] md:w-7/12 w-full   py-5 px-5 md:rounded-xl rounded-md z-[10000] ">
			<div class="flex flex-col w-full h-full ">
				<div class="flex items-center justify-center w-full border-b pb-3 border-secondary">
					<h2 class="font-semibold text-2xl text-center ">
						Post an Update
					</h2>
					<div class="cursor-pointer absolute right-4 top-2" @click="close">
						<i class="fas fa-times text-primary text-2xl"></i>
					</div>
				</div>
				<form action="" class="w-full" @submit.prevent="send">
					<select-menu @onChange="postModalRoute = $event" placeholder='Pick a route'  :options="routeNamesOnly"  class="mb-1">
						<template #icon>
							<i class="fas fa-directions text-primary text-xl"></i>
						</template>
					</select-menu>

					<textarea name="message" v-model="message" id=""  rows="7" 
						placeholder="All messages sent are monitored and censored"
						class=" w-full bg-lightGray rounded-md shadow-sm pl-3 pr-10 py-3 mt-4 text-left cursor-default
       focus:outline-none  sm:text-sm1 "></textarea>

					<button class="btn py-1 px-3 text-sm ml-auto mt-4" type="submit">
						Send
					</button>

				</form>
		
			</div>
		</div>
	</Modal>
</template>

<script>

import Modal from '../index.vue'

import {routeNamesOnly} from '@/helpers/busRoutes'
import SelectMenu from '../../SelectMenu.vue'
import {usePost} from '@/composables/usePost'
export default {
	name: 'PostModal',
	components: { Modal, SelectMenu },
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

		const {postModalRoute, message, send} = usePost()
		return {routeNamesOnly, postModalRoute, message, send}
	}
}
</script>

<style>

</style>