<template>
	<p>Google Calendar API Quickstart</p>

	<!--Add buttons to initiate auth sequence and sign out-->
	<button id="authorize_button" @click="handleAuthClick()">Authorize</button>
	<button id="signout_button" @click="handleSignoutClick()">Sign Out</button>

	<pre id="content" style="white-space: pre-wrap;"></pre>
</template>

<script>
import googleOneTapSignin from '@/composables/useGoogle.js' 
import { onMounted, ref, watch } from 'vue'

export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	setup(){
		const googleUserData = ref({
			name: '',
			email: '',
			email_verified: '',
			picture: ''
		})
    
		onMounted(() => {
			const { googleOptions, oneTapSignin, userData } = googleOneTapSignin()
			oneTapSignin(googleOptions)

			watch(userData, () => {
				console.log(userData.value)
				googleUserData.value = userData.value
			})
		})

		return { googleUserData }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>