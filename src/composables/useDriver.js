import { useStorage } from '@vueuse/core'

export const useDriver = useStorage('driver', {
	email: '',
	password: '',
	pin: '',
	route: '',
})


