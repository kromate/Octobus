
import { v4 as uuidv4 } from 'uuid'
import { app } from './init'
import { watch, onUnmounted } from '@vue/runtime-dom'
import { getFirestore, doc, setDoc, deleteDoc, collection, query, where, getDocs,getDoc, onSnapshot } from 'firebase/firestore'
import { useUser } from '@/composables/useGlobal'
import { useLoading } from '@/composables/useNotification'
import { ref } from '@vue/reactivity'

import Filter from 'bad-words'


export const chatRouteRef = ref(1)
export const routeMessage = ref([])

const filter = new Filter()
const { user } = useUser()
const {openLoading, closeLoading} = useLoading()
export const db = getFirestore(app)

watch(chatRouteRef, (newValue) => {
	console.log(newValue)
	getRouteMessage(newValue)
})

let result = []
// const timelineRef = collection(db, chatRouteRef.value)

export const savePost = async (post, routes) => {
	useLoading().openLoading()
	const usedId = user.value.uid
	const id = uuidv4()
	await setDoc(doc(db, `${routes}`, id), {
		post: filter.clean(post),
		usedId,
		id,
		date: Date(),
		user: { photo: useUser().user.value.photoURL, name: useUser().user.value.displayName ? useUser().user.value.displayName : useUser().user.value.email }
	})
	useLoading().closeLoading()
}

export const editTimeline = async (timeline, id) => {
	const usedId = user.value.uid
	await setDoc(doc(db, 'timelines', id), {...timeline, usedId, id})
}

export const delTimeline = async (id) => {
	openLoading('Deleting the timeline')
	await deleteDoc(doc(db, 'timelines', id))
	location.reload()
	closeLoading()

	
}

export const getRouteMessage = async (route) => {
	useLoading().openLoading()
	const q = query(collection(db, route))
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		result = []
		querySnapshot.forEach((doc) => {
			result.push(doc.data())
		})
		useLoading().closeLoading()
		routeMessage.value = result
	})

	onUnmounted(unsubscribe)

	return result 
}

export const getUsers = async () => {
	useLoading().openLoading()
	const UserResult = ref([])
	const q = query(collection(db, 'users'))
	const unsubscribe = await onSnapshot(q, (querySnapshot) => {
		UserResult.value = []
		querySnapshot.forEach((doc) => {
			UserResult.value.push(doc.data())
		})
		useLoading().closeLoading()

	})
	return UserResult
	
}




