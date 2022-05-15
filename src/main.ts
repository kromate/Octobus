import { createApp } from 'vue'
import App from './App.vue'
import { router as setupRouter } from '@/router'


import './assets/style/main.css'

const init = async () => {
    document.cookie = "promo_shown=1; Max-Age=2600000; Secure"
    const router = await setupRouter
    const app = createApp(App)
    app.use(router).mount('#app')
}

init().then()


