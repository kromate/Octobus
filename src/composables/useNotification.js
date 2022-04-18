import { ref } from '@vue/reactivity'

const loadingState = {
	active: ref(false),
	message: ref('')
}

export const useLoading = () => {
	const openLoading = (msg) => {
		loadingState.message.value = msg
		loadingState.active.value = true
	}
	const closeLoading = () => {
		loadingState.message.value = ''
		loadingState.active.value = false
	}
	return {...loadingState, openLoading, closeLoading}
}