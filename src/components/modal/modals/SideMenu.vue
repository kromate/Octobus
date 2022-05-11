

<template>
	<Modal v-if="showModal">
		<div class="h-screen bg-white max-w-[89%] md:w-7/12 w-full   py-5 px-5 md:rounded-xl   fixed left-0 inset-y-0">
			<div class="flex flex-col w-full h-full ">
				<div class="flex items-center justify-start w-full border-b pb-3 border-secondary">
					<h2 class="font-semibold text-2xl text-left ">
						sideMenu
					</h2>
					<div 	class="cursor-pointer absolute right-4 top-2" @click="close">
						<i class="fas fa-times text-primary text-2xl"></i>
					</div>
				</div>

				<div class="flex flex-col items-center gap-4  text-xs mt-5">
					<router-link to="/landing" class="btn w-full py-1 px-3" v-if="!user">
						landing
					</router-link>
					<button class="btn w-full py-1 px-3" @click="open(openAboutModal)">
						About us
					</button>
					<button class="btn w-full py-1 px-3" @click="$router.push('/admin')">
						Admin
					</button>
					<button class="btn w-full py-1 px-3" @click="open(openFAQsModal)">
						FAQ
					</button>
					<button class="btn w-full py-1 px-3" @click="open(openContactModal)">
						Contact
					</button>
					<button class="btn w-full py-1 px-3"  @click="user ? signOutUser() : $router.push('/login')">
						{{ user ? "Log Out" : "Login" }}
					</button>
				</div>
			</div>
		</div>
	</Modal>
</template>

<script>

import Modal from '../index.vue'
import {modalController} from '@/composables/useModal'
import { useUser } from '@/composables/useGlobal'
import { signOutUser } from '@/firebase/auth'
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
	setup(){
		const { user } = useUser()
		const {openAboutModal, openContactModal, openFAQsModal, openRoutesModal, openSideMenu, closeSideMenu} = modalController()

		const open = (func)=>{
			closeSideMenu()
			func()
		}

		

		return{open, user, signOutUser,
			openAboutModal, openContactModal, openFAQsModal, openRoutesModal, openSideMenu
		}
	}
}
</script>

<style>

</style>