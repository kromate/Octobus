import { app } from './init'
// eslint-disable-next-line import/named
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { useAlert, useLoading } from '@/composables/useNotification'
import { useUser } from '@/composables/useGlobal'
import { useRouter } from 'vue-router'


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
	
	const googleAuth = () => {
		openLoading('Logging you in... 🤩')
		signInWithPopup(auth, provider)
			.then((result) => {
				closeLoading()
				const user = result.user
				saveUser(user)
				openAlert('You have successfully signed in 🥳')
				Router.push('/')
			}).catch((error) => {
				closeLoading()
				console.log(error)
				openAlert(`Oops seems something went wrong 😕 : ${error.message}`)

			})
	} 
	
	return{googleAuth}
}



export const signOutUser = () => {
	openLoading('Signing You out...😗')
	signOut(auth).then(() => {
		clearUser()
		location.reload()
		closeLoading()
	}).catch((error) => {
		closeLoading()
		openAlert(`Oops seems something went wrong 😕 : ${error.message}`)
	})
}