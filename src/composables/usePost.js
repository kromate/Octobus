import { ref } from '@vue/reactivity'



export const usePost = () => {
	const postModalRoute = ref('')
	const message = ref('')
    
	const send = () => {
        
		console.log(postModalRoute.value, message.value)
	}

	return {postModalRoute, message, send}
}