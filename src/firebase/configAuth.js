//Import the required methods
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const FIREBASE_API_KEY  = import.meta.env.VITE_FIREBASE_API_KEY 

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY ,
    authDomain: "octobus-5cf62.firebaseapp.com",
    projectId: "octobus-5cf62",
    storageBucket: "octobus-5cf62.appspot.com",
    messagingSenderId: "733044129620",
    appId: "1:733044129620:web:2ef20fb261543decae52c1",
    measurementId: "G-KY2W2PTWXR"
  };


//initialize the firebase app
initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

//export the auth object
export { auth }