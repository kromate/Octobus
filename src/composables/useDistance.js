import { endLocation } from './useMap'
import { useGeolocation } from './useGeolocation'
import {AllBusRoute} from '../helpers/busRoutes'

export const getShortPoint = () => {
	Object.keys(AllBusRoute).map((x) => {
		console.log(x)
	})
}