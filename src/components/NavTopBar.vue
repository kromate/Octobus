<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-between flex shadow px-4 py-2 md:px-8">
		<div class="flex items-center">
			<i class="fas fa-bars mr-5 text-2xl md:hidden" @click="openSideMenu"></i>
			<router-link to="/landing" class="logo text-white text-2xl font-bold border-0 outline-none" >
				Octobus
			</router-link> 
		</div>
	

		<div class="md:flex items-center gap-4 hidden text-xs">
			<button class="btn py-1 px-3" @click="openAboutModal">
				About us
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
import { useUser } from '../composables/useGlobal'
import { signOutUser } from '../firebase/auth'
export default {
	name:'TobBar',
	setup(){
		const { user } = useUser()
		const {openAboutModal, openContactModal, openFAQsModal, openRoutesModal, openSideMenu} = modalController()

		return{ user, signOutUser,
			openAboutModal, openContactModal, openFAQsModal, openRoutesModal, openSideMenu
		}
	}
}
</script>
