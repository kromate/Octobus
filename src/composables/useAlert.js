import { useStorage } from '@vueuse/core'

export const Alert = useStorage('Alerts', [])

export const addAlert = (data) => {
	Alert.value.push(data)
}

export const delAlert = (index) => {
	Alert.value.splice(index, 1)
}