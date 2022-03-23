import { createStore } from 'vuex'

//Firebase imports
import { auth } from '../firebase/configAuth'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log(state.user)
        }
    },
    actions: {
        async signup(context, { email, password }){
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('setUser', response.user)
            } else {
                throw new Error('signup failed')
            }
        },

        async login(context, { email, password }){
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('setUser', response.user)
            } else {
                throw new Error('login failed')
            }
        },

        async logout(context){
            await signOut(auth)

            context.commit('setUser', null)
        }
    }
})

// export the store
export default store