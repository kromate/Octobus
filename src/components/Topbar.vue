<template>
	<div class="bg-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-between flex shadow px-4 py-2 md:px-8">
		<div class="flex items-center">
			<i class="las la-bars "></i>
			<h2 class="logo text-secondary text-2xl font-extrabold">
				Octobus
			</h2>
		</div>
	

		<div class="md:flex items-center gap-4 hidden text-xs">
			<button class="btn py-1 px-3" @click="openAboutModal">
				About us
			</button>
			<button class="btn py-1 px-3" @click="openRoutesModal">
				Route
			</button>
			<button class="btn py-1 px-3" @click="openFAQsModal">
				FAQ
			</button>
			<button class="btn py-1 px-3" @click="openContactModal">
				Contact
			</button>
		</div>
	</div>
</template>

<script>
import {modalController} from '../composables/useModal'
export default {
	name:'TobBar',
	setup(){
		console.log(modalController())
		const {openAboutModal, openContactModal, openFAQsModal, openRoutesModal} = modalController()

		return{
			openAboutModal, openContactModal, openFAQsModal, openRoutesModal
		}
	}
}
</script>
