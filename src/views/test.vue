<template>
	<div class="hello">

		<h3>Demo Github Repo</h3><br/>
		<p>Frontend: <a href="https://github.com/Zensynthium/vue-google-onetap-signin" target="_blank" rel="noopener noreferrer">https://github.com/Zensynthium/vue-google-onetap-signin</a></p>
		<p>Backend: <a href="https://github.com/Zensynthium/google-onetap-server" target="_blank" rel="noopener noreferrer">https://github.com/Zensynthium/google-onetap-server</a></p>
		<h3>Google Profile Information</h3>
		<p>This information will populate after the Google One-Tap Signin is completed.</p>
		<img :title="googleUserData.name" :src="googleUserData.picture" alt="User's Profile Picture">
		<p>Name: {{ googleUserData.name}}</p>
		<p>Email: {{ googleUserData.email }}</p>
		<p>Email Verified: {{ googleUserData.email_verified }}</p>
	</div>
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