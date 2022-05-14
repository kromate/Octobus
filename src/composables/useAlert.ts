import { useStorage } from '@vueuse/core'
import { useAlert } from './useNotification'

export const Alert = useStorage('Alerts', [])

export const addAlert = (data: never) => {
	Alert.value.push(data)
	useAlert().openAlert('Alert Added')
}

export const delAlert = (index) => {
	Alert.value.splice(index, 1)
	useAlert().openAlert('Alert Removed')
}