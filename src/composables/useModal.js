import { ref } from '@vue/reactivity'
import AboutModal from '../components/modal/modals/AboutModal.vue'
import ContactModal from '../components/modal/modals/ContactModal.vue'
import FAQModal from '../components/modal/modals/FAQsModal.vue'
import RouteModal from '../components/modal/modals/RouteModal.vue'

const allModals = [AboutModal, ContactModal, FAQModal, RouteModal]

const GlobalModalState = {}



export const globalModal = () => {
	const globalModalArray = []

	for (const modal of allModals) {
		globalModalArray.push(
			{
				elem: modal,
				state: GlobalModalState[modal.name],
				open: GlobalModalState['open'+modal.name],
				close: GlobalModalState['close'+modal.name]
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


export const modalController = () => {
	for (const key in GlobalModalState) { 
		GlobalModalState['open' + key] = () => {
			GlobalModalState[key].value = true
		}
		GlobalModalState['close' + key] = () => {
			GlobalModalState[key].value = false
		}
	}

	return { ...GlobalModalState }
}

// modalController()