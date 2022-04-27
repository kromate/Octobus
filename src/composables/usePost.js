import { ref } from '@vue/reactivity'
import {modalController} from '../composables/useModal'

import { savePost } from '../firebase/firestore'
import { useAlert } from './useNotification'


export const usePost = () => {
	const { closePostModal } = modalController()
    
	const postModalRoute = ref('')
	const message = ref('')
    
	const send = async() => {
		console.log(postModalRoute.value, message.value)
		if (postModalRoute.value !== '' && message.value !== '') {
			await savePost(message.value, postModalRoute.value)
			closePostModal()
			postModalRoute.value = ''
			message.value = ''
			useAlert().openAlert('Mesasage Posted')
		}
		
	}


	return {postModalRoute, message, send}
}