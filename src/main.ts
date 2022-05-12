import { createApp } from 'vue'
import App from './App.vue'
// import { registerComponents } from './plugin/registerGlobally'
import { router as setupRouter } from '@/router'
import gAuthPlugin from 'vue3-google-oauth2'

import './assets/style/main.css'

const init = async () => {
	const router = await setupRouter

	const app = createApp(App)
	app.use(gAuthPlugin, { clientId: '394838939483-rq7d2rfj39gkdfjd9jenu670ounoi01.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false })

	app.use(router).mount('#app')
}

init()


