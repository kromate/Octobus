import { ref } from '@vue/reactivity'
import {modalController} from '../composables/useModal'
import { watch } from '@vue/reactivity'

export const usePost = () => {
	const { closePostModal } = modalController()
    
	const postModalRoute = ref('')
	const message = ref('')
    
	const send = () => {
		console.log(postModalRoute.value, message.value)
		closePostModal()
	}

	watch(postModalRoute, (newValue) => {
		console.log(newValue)
	})
	return {postModalRoute, message, send}
}