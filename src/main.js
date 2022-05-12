import { createApp } from 'vue'
import App from './App.vue'
// import { registerComponents } from './plugin/registerGlobally'
import { router as setupRouter } from '@/router'
import gAuthPlugin from 'vue3-google-oauth2'

import './assets/style/main.css'

const init = async () => {
	const router = await setupRouter

	const app = createApp(App)
	app.use(gAuthPlugin, { clientId: '27001174362-pm1iko4vr9r79plujgc0domhiul3pakk.apps.googleusercontent.com', scope: 'openid email profile https://www.googleapis.com/auth/calendar', prompt: 'consent', fetch_basic_profile: false })

	app.use(router).mount('#app')
}

init()


