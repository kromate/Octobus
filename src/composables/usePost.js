import { ref } from '@vue/reactivity'
import {modalController} from '../composables/useModal'


export const usePost = () => {
	const { closePostModal } = modalController()
    
	const postModalRoute = ref('')
	const message = ref('')
    
	const send = () => {
		console.log(postModalRoute.value, message.value)
		closePostModal()
	}

	return {postModalRoute, message, send}
}