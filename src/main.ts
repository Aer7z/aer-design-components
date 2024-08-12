// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
import Button from './components/button/index'
import Modal from './components/modal/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
