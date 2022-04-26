import { useStorage } from '@vueuse/core'

export const Alert = useStorage('Alerts', [])

export const addAlert = (data) => {
	Alert.value.push(data)
	console.log(Alert.value)
}