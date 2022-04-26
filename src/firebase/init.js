
import { initializeApp } from 'firebase/app'


const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIRE_API_KEY,
	authDomain: 'octobus-1.firebaseapp.com',
	projectId: 'octobus-1',
	storageBucket: 'octobus-1.appspot.com',
	messagingSenderId: '27001174362',
	appId: '1:27001174362:web:28ce110d72dfa186121b63',
	measurementId: 'G-QVYC9LW4DE'
}


export const app = initializeApp(firebaseConfig)
