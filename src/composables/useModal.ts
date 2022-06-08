import { ref } from '@vue/reactivity'
import AboutModal from '../components/modal/modals/AboutModal.vue'
import ContactModal from '../components/modal/modals/ContactModal.vue'
import FAQModal from '../components/modal/modals/FAQsModal.vue'
import RouteModal from '../components/modal/modals/RouteModal.vue'
import SideMenu from '../components/modal/modals/SideMenu.vue'
import PostModal from '../components/modal/modals/PostModal.vue'

const allModals = [AboutModal, ContactModal, FAQModal, RouteModal, SideMenu, PostModal]

const GlobalModalState = {}



export const globalModal = () => {
	const globalModalArray = [] as any
const state = modalController()
	for (const modal of allModals) {
		globalModalArray.push(
			{
				elem: modal,
				state: GlobalModalState[modal.name],
				open: state['open' + modal.name],
				close: state['close' + modal.name]
			}
		)
	}

	return globalModalArray

}

async function registerModal(ModalArray) {
	for (const modal of ModalArray) {
		GlobalModalState[modal.name] = ref(false)
	}
}

registerModal(allModals)


export const modalController = () =>
{
	const state = {}
	for (const key in GlobalModalState) {
		state['open' + key] = () => {
			GlobalModalState[key].value = true
		}
		state['close' + key] = () => {
			GlobalModalState[key].value = false
		}
	}

	return { ...state }
}

// modalController()