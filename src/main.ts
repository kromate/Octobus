import { createApp } from 'vue'
import App from './App.vue'
import { router as setupRouter } from '@/router'


import './assets/style/main.css'

const init = async () => {
    document.cookie = "google.com; OGPC=''; __Secure-3PSID=''; __Secure-3PAPISID=''; __Secure-3PSIDCC=''; ANID=''; 1P_JAR=''; NID=''; SameSite=None; Secure"
    const router = await setupRouter
    const app = createApp(App)
    app.use(router).mount('#app')
}

init().then()


