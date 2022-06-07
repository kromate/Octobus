
import { v4 as uuidv4 } from 'uuid'
import { app } from './init'
import { watch, onUnmounted } from '@vue/runtime-dom'
import { getFirestore, doc, setDoc, deleteDoc, collection, query, where, getDocs,getDoc, onSnapshot, orderBy } from 'firebase/firestore'
import { useUser } from '@/composables/useGlobal'
import { useLoading } from '@/composables/useNotification'
import { ref } from '@vue/reactivity'

import Filter from 'bad-words'


export const chatRouteRef = ref(1)
export const routeMessage = ref([])
export const UserResult = ref([])


const filter = new Filter()
const { user } = useUser()
const {openLoading, closeLoading} = useLoading()
export const db = getFirestore(app)

watch(chatRouteRef, (newValue) => {
	getRouteMessage(newValue)
})

let result = []
let userResult = []
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
	const q = query(collection(db, route), orderBy('date'))
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		result = []
		querySnapshot.forEach((doc) => {
			result.push(doc.data())
		})
		useLoading().closeLoading()
		routeMessage.value = result
	})

	// onUnmounted(unsubscribe)

	return result 
}

export const getUsers = async () => {
	useLoading().openLoading()

	const q = query(collection(db, 'users'))
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		userResult = []
		querySnapshot.forEach((doc) => {
			userResult.push(doc.data())
		})
		UserResult.value = userResult
		useLoading().closeLoading()

	})
	
}




