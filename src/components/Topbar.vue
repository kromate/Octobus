<template>
	<div class="bg-secondary text-white fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center justify-between flex shadow px-4 py-2 md:px-8">

		<h3 class="text-base font-medium">
			Find a bus
		</h3>

		<i class="fas fa-plus text-xl"></i>
	
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
