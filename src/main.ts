import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { injectSpeedInsights } from '@vercel/speed-insights'

import App from './App.vue'
import router from './router'

const app = createApp(App)

injectSpeedInsights()

app.use(createPinia())
app.use(router)

app.mount('#app')
