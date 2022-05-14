import { createApp } from 'vue'
import App from './App.vue'
// import { registerComponents } from './plugin/registerGlobally'
import { router as setupRouter } from '@/router'


import './assets/style/main.css'

const init = async () => {
    const router = await setupRouter

    const app = createApp(App)


    app.use(router).mount('#app')
}

init()


