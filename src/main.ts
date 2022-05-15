import { createApp } from 'vue'
import App from './App.vue'
import { router as setupRouter } from '@/router'


import './assets/style/main.css'

const init = async () => {
    document.cookie = " SameSite=None; Secure"
    const router = await setupRouter
    const app = createApp(App)
    app.use(router).mount('#app')
}

init().then()


