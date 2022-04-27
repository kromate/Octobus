import { ref } from '@vue/reactivity'
import {modalController} from '../composables/useModal'
// import { watch } from '@vue/runtime-dom'
import { savePost } from '../firebase/firestore'

export const usePost = () => {
	const { closePostModal } = modalController()
    
	const postModalRoute = ref('')
	const message = ref('')
    
	const send = async() => {
		console.log(postModalRoute.value, message.value)
		if (postModalRoute.value !== '' && message.value !== '') {
			await savePost(message.value, postModalRoute.value)
			closePostModal()
		}
		
	}


	return {postModalRoute, message, send}
}