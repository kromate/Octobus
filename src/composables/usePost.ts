import { ref } from '@vue/reactivity'

import { savePost } from '../firebase/firestore'
import { useAlert, useLoading } from './useNotification'


export const usePost = () => {

	const postModalRoute = ref('')
	const message = ref('')

	const send = async () => {
		if (postModalRoute.value !== '' && message.value !== '') {
			useLoading().openLoading('loading')
			await savePost(message.value, postModalRoute.value)
			postModalRoute.value = ''
			message.value = ''
			useLoading().closeLoading()
			// useAlert().openAlert('Mesasage Posted')
		}

	}


	return { postModalRoute, message, send }
}