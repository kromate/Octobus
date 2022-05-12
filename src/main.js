import { createApp } from 'vue'
import App from './App.vue'
// import { registerComponents } from './plugin/registerGlobally'
import { router as setupRouter } from '@/router'
import gAuthPlugin from 'vue3-google-oauth2'

import './assets/style/main.css'

const init = async () => {
	const router = await setupRouter

	const app = createApp(App)
	app.use(gAuthPlugin, { clientId: '27001174362-e28tr884dkac4mud474bb5i0ce4duei4.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: true })

	app.use(router).mount('#app')
}

init()


