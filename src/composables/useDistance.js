import { endLocation } from './useMap'
import { useGeolocation } from './useGeolocation'
import {AllBusRoute} from '../helpers/busRoutes'

export const getShortPoint = () => {
	AllBusRoute.map((x) => {
		console.log(x)
	})
}