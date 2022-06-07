import { app } from './init'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useAlert, useLoading } from '@/composables/useNotification'
import { useUser } from '@/composables/useGlobal'
import { useRouter } from 'vue-router'
import { ref } from '@vue/reactivity'


const {openAlert} = useAlert()
const {openLoading, closeLoading} = useLoading()
const {clearUser, saveUser} = useUser()

const auth = getAuth(app)


onAuthStateChanged(auth, (user) => {
	if (user) {
		saveUser(user)
	} else {
		clearUser()
		// User is signed out
		// ...
	}
})


const provider = new GoogleAuthProvider()

export const useLogin = () => {
	const Router = useRouter()

	const email = ref('')
	const password = ref('')
	const error = ref('')
	const registerEmail = () => {
		openLoading('Logging you in... 🤩')
		createUserWithEmailAndPassword(auth, email.value, password.value)
			.then((result) => {
				closeLoading()
				const user = result.user
				saveUser(user)
				openAlert('You have successfully signed in')
				Router.push('/')
			}).catch((err) => {
				closeLoading()
				error.value = err.message
				openAlert(`Oops seems something went wrong 😕 : ${err.message}`)

			})
	}
	const loginEmail = () => {
		error.value = ''
		openLoading('Logging you in...')
		signInWithEmailAndPassword(auth, email.value, password.value)
			.then((result) => {
				closeLoading()
				const user = result.user
				saveUser(user)
				openAlert('You have successfully signed in ')
				Router.push('/')
			}).catch((err) => {
				closeLoading()
				error.value = err.message
				openAlert(`Oops seems something went wrong 😕 : ${err.message}`)

			})
	}
	const googleAuth = () => {
		openLoading('Logging you in... 🤩')
		signInWithPopup(auth, provider)
			.then((result) => {
				closeLoading()
				const user = result.user
				saveUser(user)
				openAlert('You have successfully signed in')
				Router.push('/')
			}).catch((error) => {
				closeLoading()
				openAlert(`Oops seems something went wrong 😕 : ${error.message}`)

			})
	} 
	
	return{googleAuth, email, password, error, loginEmail, registerEmail}
}



export const signOutUser = () => {
	openLoading('Signing You out...😗')
	signOut(auth).then(() => {
		clearUser()
		location.reload()
		closeLoading()
		location.href = '/login'
	}).catch((error) => {
		closeLoading()
		openAlert(`Oops seems something went wrong 😕 : ${error.message}`)
	})
}